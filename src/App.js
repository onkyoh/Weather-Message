import { useState} from 'react';
import './App.css';
import Header from './components/Header';
import Message from './components/Message';



function App() {

  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState("")
  const [locationChosen, setLocationChosen] = useState("")
  const [temp, setTemp] = useState("")
  const [condition, setCondition] = useState("")
  const [icon, setIcon] = useState("")
  const [error, setError] = useState("")
  const [wrongCity, setWrongCity] = useState(false)

  const fetchWeather = async (locationObject) => {
    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${locationObject.lat}&lon=${locationObject.lon}&appid=27a09a7637d86e974e750cf11aa6f9d9`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
      if (!locationObject.state) {
        setLocationChosen(() => (weatherData.name + ", " + weatherData.sys.country));
      } else {
      setLocationChosen(() => (weatherData.name + ", " + locationObject.state + ", " + weatherData.sys.country));
      }
      setTemp(() => Math.round(weatherData.main.temp - 273.15) + "°C");
      setCondition(() => weatherData.weather[0].description);
      setIcon(() => `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
      setLoading(false);
      setError(() => "");
      handleMessage(weatherData.weather[0].icon, (weatherData.main.temp - 273.15));
  } catch {
    setLoading(() => true);
    setError(() => "City not found");
  }
  setWrongCity(() => false)
}

  const fetchLocation = async (location) => {
    try {
      const locationUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=27a09a7637d86e974e750cf11aa6f9d9`;
      const locationResponse = await fetch(locationUrl);
      const locationData = await locationResponse.json();
      const locationObject = locationData[0];
      fetchWeather(locationObject);
      document.querySelector('.typing').textContent = "";
      document.querySelector('.decoy').textContent = "";
      document.querySelector('.decoy').style.animation = 'none';
    } catch {
        setLoading(() => true);
        setError(() => "City not found");
    }
  }

  const handleLocation = (event) => {
    setLocation(event.target.value)
  }

  const handleMessage = (iconGiven, tempGiven) => {
    var message1 = "1st part of message";
    var message2 = "2nd part of message";
    var splitIcon = iconGiven.split('');
    var conditionsGiven = splitIcon[0] + splitIcon[1];
 
    
    if (34 < tempGiven) {
      message1 = "ask God why I was sent to hell";
    } else if ( 25 < tempGiven) {
      message1 = "wear as little as possible";
    } else if (10 < tempGiven) {
      message1 = "savour the warm weather";
    } else if ( -10 < tempGiven) {
       message1 = "put on something warm";
     } else if ( -20 < tempGiven) {
      message1 = "try to stay as warm as possible";
    } else if ( tempGiven < -20) {
      message1 = "burn the furniture for warmth";
    }

    if (splitIcon[2] === 'n') {
      message2 = "tuck myself into bed";
    } else {
      if (conditionsGiven < 5 || conditionsGiven === 50) {
         message2 = "enjoy the rest of day";
      } else if (conditionsGiven === 11) {
        message2 = "avoid open fields";
      } else {
        message2 = "prepare to get wet";
      }
    }

  var messageGiven = `I would... ` + message1 + " and " +  message2 + "." ;
  document.querySelector('.typing').textContent = messageGiven;
  document.querySelector('.decoy').textContent = messageGiven;
  document.querySelector('.decoy').style.animation = `typewriter 10s steps(${messageGiven.length}) forwards, blink 1s infinite ease`;
  }

  const handleUserLocation = () => {

    const successCallback = (position) => {
       console.log(position)
       var locationObject = {
         lat:  position.coords.latitude,
         lon:  position.coords.longitude
       }
      fetchWeather(locationObject);
      document.querySelector('.typing').textContent = "";
      document.querySelector('.decoy').textContent = "";
      document.querySelector('.decoy').style.animation = 'none';
      setLocation(() => "");
    }

    const errorCallback = (error) => {
      console.log(error);
      setError(() => error.message);
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  }

  return (
    <div className='App'>

    <div className="blank-header"></div>
      <Header locationChosen={locationChosen} temp={temp} icon={icon} condition={condition} loading={loading} 
      error={error} handleLocation={handleLocation} fetchLocation={fetchLocation} location={location}
      wrongCity={wrongCity} setWrongCity={setWrongCity} handleUserLocation={handleUserLocation}/>

      <Message />
    <div className='footer'></div>
    
    </div>
  );
}

export default App;
