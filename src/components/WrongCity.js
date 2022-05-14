import React from 'react'

const WrongCity = ({wrongCity, wrongCityStyle,correctCityStyle, setWrongCity, loading}) => {
  return (
    <>
    <div className="wrong-city" style={!loading ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => setWrongCity(!wrongCity)} >
        Wrong City?   
    </div>
    <div className='wrong-city-helper'  style={wrongCity ? {visibility: 'visible'} : {visibility: 'hidden'}}>
          Try including the state and country for your desired city! 
          <br />  Example: Toronto, Ontario, CA
          <br /> (Some weather reports are from the nearest city with weather data)
    </div>
    </>
  )
}

export default WrongCity;