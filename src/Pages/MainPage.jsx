import React from 'react';
import { useState, useEffect } from 'react';
import MainImage from '../Components/MainImage';
import MovieDisplay from '../Components/MovieDisplay';

const MainPage = () => {
    const apiKey = '057909974c9d5224728f78f8117b9f48';
    const preImg = 'https://image.tmdb.org/t/p/w500';

    const [firstMovie, setFirstMovie] = useState({});

    const fetchMovies = (endpoint)=> {
        fetch(endpoint)
          .then(res => res.json())
            .then((data)=> {
                console.log('movies', data?.results)
                setFirstMovie(data?.results[0])
            })
              .catch(()=> console.log('an error has occured'))
    }

    useEffect(()=> {
        fetchMovies(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
    }, [])

  return (
    <div className='lg:px-0 px-4 w-full h-full pb-2 
    overflow-y-scroll scrollbar-none flex flex-col gap-6 items-center'>                                                                                                                       
        <MainImage 
          movietitle={firstMovie?.original_title}
          imgSrc={preImg + firstMovie?.poster_path} />

          <MovieDisplay
            category='popular'
            text='Popular' />

          <MovieDisplay
            category='top_rated'
            text='Top Rated' />

          <MovieDisplay
            category='upcoming'
            text='Upcoming' />
    </div>
  )
}

export default MainPage