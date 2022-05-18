import React from 'react'
import Weather from './Weather';


const Header = ({  loading, locationChosen, temp, icon, condition, wrongCity, setWrongCity, error, handleLocation, fetchLocation, location, handleUserLocation}) => {
  
    return (
    <div className="middle" >
            <Weather locationChosen={locationChosen} temp={temp} icon={icon} condition={condition} loading={loading}/> 
    </div>
  )
}

export default Header;