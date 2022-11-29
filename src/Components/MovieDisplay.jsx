import React from 'react';
import { useState, useEffect } from 'react';
import MoviesArray from './MoviesArray';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAllMovies } from '../Redux/ActionsFolder/ProductActions';

const MovieDisplay = (props) => {
  const dispatch = useDispatch();
    const apiKey = '057909974c9d5224728f78f8117b9f48';
    const preImg = 'https://image.tmdb.org/t/p/w500';

    const [categoryMovies, setCategoryMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const fetchCategoryMovies = ()=> {
        setCategoryMovies([]);
        fetch(`https://api.themoviedb.org/3/movie/${props?.category}?api_key=${apiKey}&page=${pageNumber}`)
          .then(res => res.json())
            .then((data) => {
                setCategoryMovies(data?.results);
                dispatch(setAllMovies(data?.results))
            })
              .catch((error)=> console.log("Error", error))
    }

    useEffect(()=> {
      fetchCategoryMovies();

      // return ()=> dispatch(removeSetMovies())

    }, [])

  return (
    <div className='w-full p-2 flex flex-col gap-4'>
        <div className='flex w-full justify-between items-center'>
          <h1 className='text-white text-4xl'>{props?.text}</h1>

          <Link to={`/categories/${props?.category}`}>
            <p onClick={()=> {
              fetchCategoryMovies()
            }}>See More</p>
          </Link>
        </div>

        <MoviesArray
          categoryMovies={categoryMovies}
          preImg={preImg} />

    </div>
  )
}

export default MovieDisplay