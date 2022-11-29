import React from 'react';
import InfoButton from './InfoButton';
import PlayButton from './PlayButton';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const MoviePromptInfo = (props) => {
  return (
    <div className={`sm:w-[40%] w-full sm:py-0 py-2 sm:pb-0 pb-4 flex flex-col gap-10 items-center justify-center sm:pr-1`}>
            {/* movie title name */}
            <h1 className='sm:text-6xl xs:text-4xl text-3xl text-white text-center'>{props?.movietitle}</h1>

            {/* play buttons */}
            <div className='flex gap-4 items-center justify-center'>
                <PlayButton 
                // link 'to' outstanding
                  text='Play' />

                <InfoButton
                // link 'to' outstanding
                  icon={<AiOutlineInfoCircle style={{fontSize: '2rem', color: "white", }} />}
                  text='See Info' />
            </div>
    </div>
  )
}

export default MoviePromptInfo