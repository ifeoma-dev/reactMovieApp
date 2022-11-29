import React from 'react';
import { Link } from 'react-router-dom';
import MovieImg from './Image/MovieImg';

const MoviesArray = (props) => {
  return (
    <div className='w-full p-2 flex gap-2 overflow-x-scroll scrollbar-none'>
        {props?.categoryMovies?.map((movie, i)=> (
          // <div className='w-60 h-60 flex-shrink-0'>
          // <Link 
            // className='w-52 h-80 max-w-full block'>
            <MovieImg
            id={movie?.id}
            key={i}
            className='w-52 h-80'
            src={props?.preImg + movie?.poster_path} />
          // </Link>

          // </div>
        ))}
    </div>
  )
}

export default MoviesArray
// <img 
//   id={movie?.id}
//   key={i}
//   className='w-full h-full'
//   src={props?.preImg + movie?.poster_path} />