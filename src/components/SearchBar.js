import React from 'react';
import { ReactComponent as Arrow } from '../SVGs/Arrow.svg';


const SearchBar = ({ error, handleLocation, fetchLocation, location, loading, handleUserLocation}) => {
  return (
    <div className='search-bar'>
        <p className='error'>{error}</p>
        <div className='searching-components'>
          <input type="text" placeholder="Enter city name" value={location} onChange={event => handleLocation(event)}/>
          <Arrow className="button" onClick={() => fetchLocation(location)}/>
          <div className='location-icon' onClick={() => handleUserLocation()}>
            <div style={{height: "32.5px", width: "32.5px", background: "var(--primary)", borderRadius: "50%", position: "absolute", left: "50%", top: "35%", transform: "translate(-50%, -50%)"}}></div>
            <div style={{height: "10px", width: "10px", background: "white", borderRadius: "50%", position: "absolute", left: "50%", top: "35%", transform: "translate(-50%, -50%)"}}></div>
            <div style={{borderLeft: "13px solid transparent", borderRight: "13px solid transparent", borderTop: "20px solid var(--primary)", position: "absolute", left: "50%", top: "74%", transform: "translate(-50%, -50%)"}}></div>
        </div>  
        </div>
    </div>
  )
}

export default SearchBar;