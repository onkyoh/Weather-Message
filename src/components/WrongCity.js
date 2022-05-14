import React from 'react'

const WrongCity = ({wrongCity, wrongCityStyle,correctCityStyle, setWrongCity, loading}) => {
  return (
    <>
    <div className="wrong-city" style={!loading ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => setWrongCity(!wrongCity)} >
        Wrong City?   
    </div>
    <div className='wrong-city-helper'  style={wrongCity ? {display: 'block'} : {display: "none"}}>
          Try including the state and country for your desired city! 
          <br />  Example: Toronto, Ontario, CA
          <br /> (Nearby city = error due to specificity of coordinate retrieval)
    </div>
    </>
  )
}

export default WrongCity;