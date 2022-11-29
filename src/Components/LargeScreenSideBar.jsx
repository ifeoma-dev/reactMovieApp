import React from 'react';
import SiteName from './SiteName';
import SidebarContentsCard from './SidebarContentsCard';
import SidebarContentCard from './SidebarContentCard';
import { FaSafari } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import { GiCampCookingPot } from 'react-icons/gi';
import  { HiHome } from 'react-icons/hi'

const LargeScreenSideBar = (props) => {
  return (
    <div 
      className={`${props?.className} py-10 h-full flex flex-col gap-6
      items-center border-r-[1px] border-solid border-white`}>
        
        <SiteName />

        <SidebarContentsCard>
            <p 
              className='lg:text-slate-700 text-blue-300'>
                Menu
            </p>

            <SidebarContentCard
              to='/'
              icon={<HiHome style={{fontSize: '1rem', color: 'white',}} />}
              text='Home'
              handleClick={props?.handleClick} />

            <SidebarContentCard
              to={`/genres/all`}
              icon={<FaSafari style={{fontSize: '1rem', color: 'white',}} />}
              text='Browse'
              handleClick={props?.handleClick} />

            <SidebarContentCard
            // link to
              icon={<BsHeart style={{fontSize: '1rem', color: 'white',}} />}
              text='Watchlist'
              handleClick={props?.handleClick} />

            <SidebarContentCard
            // link to
              icon={<GiCampCookingPot style={{fontSize: '1rem', color: 'white',}} />}
              text='Coming Soon'
              handleClick={props?.handleClick} />
        </SidebarContentsCard>

    </div>
  )
}

export default LargeScreenSideBar