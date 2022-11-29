import React from 'react';
import { Link } from 'react-router-dom';

const InfoButton = (props) => {
  return (
    <Link to={props?.to}>
        <button className='p-4 flex items-center justify-center gap-2 
        text-xl text-white bg-green-100/70 hover:bg-green-100/80
        rounded-lg'>
            {props?.icon}
            <p>{props?.text}</p>
        </button>
    </Link>
  )
}

export default InfoButton