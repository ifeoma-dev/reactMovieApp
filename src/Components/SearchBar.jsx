import React from 'react';
import { CiSearch } from 'react-icons/ci'

const SearchBar = () => {
  return (
    // main container
    <div 
      className='px-2 py-2 pl-2 flex items-center bg-white border-[1px]
      border-solid border-slate-500 rounded-xl'>
        {/* input search text */}
        <input 
          className='sm:w-72 xs.5:w-64 xs:w-52 2xs:w-44 w-32 h-10 px-2 outline-none bg-transparent' />

        {/* search icon */}
        <div className='flex-1 flex items-center justify-center'>
          <CiSearch 
            style={{
              fontSize: '2rem',
              color: 'black',
            }}/>
        </div>
    </div>
  )
}

export default SearchBar