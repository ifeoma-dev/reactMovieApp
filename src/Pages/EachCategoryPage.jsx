import React, { useEffect } from 'react';
import GenresMoviesDisplay from '../Components/GenresMoviesDisplay';
import { useState } from 'react';
import Pagination from '../Components/Pagination';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAllMovies, removeSetMovies } from '../Redux/ActionsFolder/ProductActions';

const EachCategoryPage = (props) => {
    const apiKey = '057909974c9d5224728f78f8117b9f48';
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(1);
    const { category } = useParams();

    const fetchMovies = ()=> {
        dispatch(removeSetMovies())
        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&page=${pageNumber}`)
          .then(res => res.json())
            .then((data) => {
                dispatch(setAllMovies(data?.results))
            })
              .catch((error)=> console.log("Error", error))
    }

    useEffect(()=> {
        fetchMovies();
    }, [pageNumber])

    const increasePageNumber = ()=> {
        setPageNumber(prev => prev + 1)
      }
  
      const decreasePageNumber = ()=> {
        setPageNumber(prev => prev - 1)
      }

  return (
    <div className='w-full h-full flex flex-col gap-2 pb-2'>
        <div className='w-full pt-4 pl-6'>
          <h1 className='text-white sm:text-xl text-lg'>
            <span className='uppercase sm:text-4xl text-3xl font-bold text-red-700 mr-2'>{category}</span>
            movies
          </h1>
        </div>

        <GenresMoviesDisplay />

        <div className='self-center'>
          <Pagination
          increasePageNum={increasePageNumber}
          decreasePageNum={decreasePageNumber}
          pageNum={pageNumber} />
        </div>
    </div>
  )
}

export default EachCategoryPage