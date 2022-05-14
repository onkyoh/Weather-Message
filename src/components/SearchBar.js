import React from 'react';
import { ReactComponent as Arrow } from '../SVGs/Arrow.svg';


const SearchBar = ({ error, handleLocation, fetchLocation, location, loading}) => {
  return (
    <div className='search-bar'>
        <p className='error'>{error}</p>
        <div className='searching-components'>
          <input type="text" placeholder="Enter city name" onChange={event => handleLocation(event)}/>
          <Arrow className="button" onClick={() => fetchLocation(location)}/>
        </div>
    </div>
  )
}

export default SearchBar;