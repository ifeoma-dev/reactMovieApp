import React from 'react';
import MoviePromptInfo from './MoviePromptInfo';
import TopMovieCard from './Image/TopMovieCard';

const MainImage = (props) => {
  return (
    // topmoviecard has full width
    // from below small, it becomes flex-col
    <TopMovieCard>
        <MoviePromptInfo
          movietitle={props?.movietitle} />

       {/* <div className='flex-1 flex items-center justify-center bg-red-600'> */}
         <img 
          className='flex-1 h-full rounded-lg object-contain'
          src={props?.imgSrc} />
       
    </TopMovieCard>
  )
}

export default MainImage