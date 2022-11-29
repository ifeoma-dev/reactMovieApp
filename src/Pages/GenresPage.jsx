import React from 'react';
import GenreCard from '../Components/GenreCard';
import GenresMoviesDisplay from '../Components/GenresMoviesDisplay';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Pagination from '../Components/Pagination';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setAllMovies, removeSetMovies, increasePageNum, decreasePageNum } from '../Redux/ActionsFolder/ProductActions';

const GenresPage = () => {
    const dispatch = useDispatch();
    const { genreID } = useParams();
    const { pageNumber } = useSelector((state)=> state?.currentPageNumber)

    const apiKey = '057909974c9d5224728f78f8117b9f48';
    
    const fetchGenreMovies = ()=> {
        
        fetch(`
        https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreID}&page=${pageNumber}&`)
          .then(res => res.json())
            .then(data => {
                dispatch(setAllMovies(data?.results))
            })
              .catch((error)=> console.log('Error', error))
    }

    useEffect(()=> {
        fetchGenreMovies()
    }, [pageNumber])

  return (
    <div className='w-full h-full pb-2 flex sm:flex-row flex-col
    max-sm:px-1'>
        {/* width is 50% */}
        <GenreCard 
          pageNum={pageNumber} />

        <div className='flex-1 flex flex-col items-center sm:gap-1 gap-0 pb-2'>
        <GenresMoviesDisplay />

        <Pagination
          decreasePageNum={()=> {
            if (pageNumber > 1) {
                dispatch(removeSetMovies())
                dispatch(decreasePageNum(1))
            }
          }}
          increasePageNum={()=> {
            if (pageNumber <= 30) {
                dispatch(removeSetMovies())
                dispatch(increasePageNum(1))
            }
          }}
          pageNum={pageNumber} />
        </div>

        
    </div>
  )
}

export default GenresPage