import React from 'react';
import SearchBar from './SearchBar';

const Navbar = (props) => {
  return (
    <div className={`${props?.className} bg-black absolute z-30 px-4 w-full flex items-center
    top-0 left-0`}>
        <SearchBar />
    </div>
  )
}

export default Navbar