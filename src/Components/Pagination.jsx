import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useParams } from 'react-router-dom';

const Pagination = (props) => {
    const { category } = useParams();
  return (
    <div className='flex gap-2 items-center'>
        <AiOutlineArrowLeft
          style={{fontSize: '1rem', color: 'white', cursor: 'pointer',}}
          onClick = {function() {
            if (props?.pageNum > 1) {
                props?.decreasePageNum()
            }
          }} />

        <h2 className='px-1 py-[1px] bg-slate-300 text-black'>{props?.pageNum}</h2>

        <AiOutlineArrowLeft
          style={{fontSize: '1rem', color: 'white', transform: 'scaleX(-1)', cursor: 'pointer',}}
          onClick = {function() {
            if (props?.pageNum <= 30) {
                props?.increasePageNum()
            }
          }} />
    </div>
  )
}

export default Pagination