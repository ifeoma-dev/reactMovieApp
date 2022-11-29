import React from 'react';
import { Link } from 'react-router-dom';

const SidebarContentCard = (props) => {
  return (
    <div className='flex items-center gap-2'>
        {props?.icon}

        <Link 
          to={props?.to}
          onClick={props?.handleClick}>
          <p className='lg:text-slate-400 text-slate-700 text-lg'>{props?.text}</p>
        </Link>
    </div>
  )
}

export default SidebarContentCard