import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { setAllMovies, removeSetMovies } from '../Redux/ActionsFolder/ProductActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import $ from 'jquery'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { setPageNum } from '../Redux/ActionsFolder/ProductActions';

const EachGenre = (props) => {
    const { genreID } = useParams();
    const apiKey = '057909974c9d5224728f78f8117b9f48';
    const dispatch = useDispatch();

    const [genreClicked, setGenreClicked] = useState(false);

    const fetchGenreMovies = ()=> {
        console.log('id', genreID)
        fetch(`
        https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreID}&page=${props?.pageNum}&`)
          .then(res => res.json())
            .then(data => {
                dispatch(setAllMovies(data?.results))
            })
              .catch((error)=> console.log('Error', error))
    }

    useEffect(()=> {
        if (genreClicked) {
            fetchGenreMovies()
        }
    }, [genreID])

  return (
    <Link to={`/genres/${props?.genreIDs}`}>
    <button 
      className='sm:w-full flex items-center gap-4 bg-black sm:pl-6 p-2
      border-[1px] border-slate-100 rounded-lg'
      onClick={(e)=> {
        dispatch(removeSetMovies());
        dispatch(setPageNum(1))
        setGenreClicked(true);
        // making target button text red and other buttons text white
        $('.genre-text').css('color', 'white');

        if (e.target.tagName.toLowerCase() === 'button') {
            let target = e.target.firstElementChild;
            target.style.color = 'red';
        } else if (e.target.tagName.toLowerCase() === 'h1') {
            let target = e.target;
            target.style.color = 'red';
        } else if (e.target.tagName.toLowerCase() === 'svg') {
            let target = e.target.previousElementSibling;
            target.style.color = 'red';
        }
        
      }}>
        <h1 className='genre-text md:text-3xl sm:text-xl text-base'>{props?.genreText}</h1>

        <AiOutlineArrowRight style={{color: 'red', fontSize: '1.5rem', }} />
    </button>
    </Link>
  )
}

export default EachGenre