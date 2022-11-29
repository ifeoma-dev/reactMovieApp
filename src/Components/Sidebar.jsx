import React from 'react';
import LargeScreenSideBar from './LargeScreenSideBar';
import SmallScreenSideBar from './SmallScreenSideBar';
import Media from 'react-media';

const Sidebar = (props) => {
  return (
    <Media query='(min-width: 1024px)'>
        {(matches)=> {
            return matches ? (
                <LargeScreenSideBar
                  className={props?.className} />
            ) : (<SmallScreenSideBar />)
        }}
    </Media>
  )
}

export default Sidebar