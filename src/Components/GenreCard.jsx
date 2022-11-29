import React from 'react';
import EachGenre from './EachGenre';
import { useState } from 'react';


const GenreCard = (props) => {
    const [allGenres, setAllGenres] = useState([]);
    
    const fetchGenres = ()=> {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=057909974c9d5224728f78f8117b9f48')
          .then(res => res.json())
            .then(data => setAllGenres(data?.genres))
    }

    fetchGenres();

  return (
    <div className='flex p-2 sm:h-full sm:flex-col sm:overflow-y-scroll 
    max-sm:w-[20vw] scrollbar-none items-start
    sm:justify-start justify-center gap-2'>
          {allGenres?.map?.((genre, i)=> (
            <EachGenre
            pageNum={props?.pageNum}
            key={i}
            genreText= {genre?.name}
            genreIDs={genre?.id} />
          ))}
    </div>
  )
}

export default GenreCard