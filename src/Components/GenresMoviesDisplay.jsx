import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieImg from './Image/MovieImg';
import { Link } from 'react-router-dom';

const GenresMoviesDisplay = () => {
    // const apiKey = '057909974c9d5224728f78f8117b9f48';
    const preImg = 'https://image.tmdb.org/t/p/w500';
    const {category} = useParams()

    // retrieving current state  of all movies from reducer that deals with/returns it
    const { allMovies } = useSelector((state) => state?.allMovies );

    const movies = allMovies?.filter(movie => movie?.poster_path !== null)

    console.log(`our ${category} movies`, allMovies)

  return (
    <div className='flex-1 items-center justify-center py-6 px-2 flex flex-wrap gap-2
    overflow-y-scroll scrollbar-none'>
        {!movies?.length ? (
            <h1>Loading Movies...</h1>
        ) : (
            <>
            {movies?.map((movie, i)=> (
                <Link 
                  to={`/movie/${movie?.id}`}
                  className='w-52 h-80'>
                    <MovieImg
                    id={movie?.id}
                    key={i}
                    className='w-full h-full rounded-lg animate-slideup'
                    src={preImg + movie?.poster_path} />
                </Link>
            ))}
            </>
        )}
    </div>
  )
}

export default GenresMoviesDisplay