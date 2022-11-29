import React from 'react'

const TopMovieCard = (props) => {
  return (
    <div className='w-full sm:h-[30rem] py-2 flex sm:flex-row flex-col items-center justify-center'>
        {props?.children}
    </div>
  )
}

export default TopMovieCard