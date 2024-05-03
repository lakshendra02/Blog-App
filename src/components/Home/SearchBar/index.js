import React from 'react';
import './style.css';

const SearchBar = ({value, handleSearchkey, clearSearch, formSubmit}) => {
  return (
    <div className='searchBar-wrap'>

        <form onSubmit={formSubmit}>
            <input 
            type="text" 
            onChange={handleSearchkey} 
            placeholder='Search By Category' 
            value={value}/>
            { value && <span onClick={clearSearch}>X</span>}

            <button>Go</button>
        </form>
      
    </div>
  )
}

export default SearchBar;
