import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import LargeScreenSideBar from './LargeScreenSideBar';

const SmallScreenSideBar = () => {
  const [barIsOpen, setBarIsOpen] = useState(false);

  const handleClick = ()=> {
    setBarIsOpen(false);
  }

  return (
    <>
      {!barIsOpen ? ( 
        // bar is closed, open it
        <GiHamburgerMenu 
          style={{
              fontSize: '2rem', 
              color: 'white',
              position: 'absolute',
              right: '2rem',
              top: '2rem',
              zIndex: '400',
          }}
          onClick={()=> setBarIsOpen(true)} />
      ) : (
        // bar is open, close it
        <AiOutlineClose 
          style={{
              fontSize: '2rem', 
              color: 'white',
              position: 'absolute',
              right: '2rem',
              top: '2rem',
              zIndex: '400',
          }}
          onClick={()=> setBarIsOpen(false)} />
      )
      }

      <LargeScreenSideBar
        handleClick={handleClick}
        className={`xs.5:w-[40%] w-[70%] absolute z-50 left-0 transition-all 
        ${barIsOpen ? 'translate-x-0' : 'translate-x-[-100%]'} bg-sky-400/60 backdrop-blur-md `} />
  
    </>
  )
}

export default SmallScreenSideBar