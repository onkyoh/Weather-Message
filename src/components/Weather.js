import React from 'react'

const Weather = ({locationChosen, temp, icon, condition, loading}) => {
  return (
    <div className='weather-results' style={!loading ? {display: 'block'} : {display: 'none'}}>
        <div className='weather-header'>
            <div className='temp'>{temp} </div>
            <img src={icon} alt="weather-icon" className="weather-icon"/>
        </div>
        <div className='location'>{locationChosen}</div>
        
        {/* <div>{condition}</div> */}
        
    </div>  
  )
}

export default Weather;