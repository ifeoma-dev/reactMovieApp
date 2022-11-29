import React from 'react'
import { Link } from 'react-router-dom'

const PlayButton = (props) => {
  return (
    <Link to={props?.to}>
        <button className='p-4 text-xl text-white bg-green-100/80 hover:bg-green-100/70
        rounded-lg'>
            {props?.text}
        </button>
    </Link>
  )
}

export default PlayButton