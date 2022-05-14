import React from 'react'
import Weather from './Weather';
import SearchBar from './SearchBar';
import WrongCity from './WrongCity';

const Header = ({  loading, locationChosen, temp, icon, condition, wrongCity, setWrongCity, error, handleLocation, fetchLocation, location, handleUserLocation}) => {
  
    return (
    <div className="header" >
        <div id="same-line-flex">
            <SearchBar error={error} handleLocation={handleLocation} fetchLocation={fetchLocation} location={location} handleUserLocation={handleUserLocation}/>
            <WrongCity wrongCity={wrongCity} setWrongCity={setWrongCity} loading={loading}/>
        </div>
            <Weather locationChosen={locationChosen} temp={temp} icon={icon} condition={condition} loading={loading}/>
      
    </div>
  )
}

export default Header;