import React, { useState } from 'react'
import ActionAfricaMovies from '../components/modules/HomePage/ActionAfrica';
import EmotionalAfricaMovies from '../components/modules/HomePage/EmotianalAfrica';
import VideoComponent from '../components/modules/HomePage/Video';

function MoviesPage() {
  const initial = 'actionAfrica';
  const [isTabActive, setIsTabActive] = useState(initial);
  return (
    <div className='bg-[#112559] euclid-circular w-full'>
      <VideoComponent />
      <div className='md:pl-20'>

        <div className='flex text-white mb-1 justify-items-start items-start gap-8 flex-row w-full'>
          <div onClick={() => setIsTabActive(initial)}>
            <h1 className={`${isTabActive === initial ? 'border-b-4 border-[#0077DA]' : ''} font-bold py-2 cursor-pointer w-max`}>Action Movies</h1>
          </div>
          <div onClick={() => setIsTabActive('emotionalAfrica')} >
            <h1 className={`${isTabActive === 'emotionalAfrica' ? 'border-b-4 border-[#0077DA]' : ''} font-bold py-2 cursor-pointer w-max`}>Emotional Movies</h1>
          </div>
          <div onClick={() => setIsTabActive('commingSoon')}>
            <h1 className={`${isTabActive === 'commingSoon' ? 'border-b-4 border-[#0077DA]' : ''} font-bold py-2 cursor-pointer w-max`}>Coming soon</h1>
          </div>
          <div onClick={() => setIsTabActive('comedyAfrica')}>
            <h1 className={`${isTabActive === 'comedyAfrica' ? 'border-b-4 border-[#0077DA]' : ''} font-bold py-2 cursor-pointer w-max`}>Comedy Movies</h1>
          </div>
        </div>
        <div className='flex flex-col pb-24 mt-10 justify-center items-center'>
          {isTabActive === initial && <ActionAfricaMovies />}
          {isTabActive === 'emotionalAfrica' && <EmotionalAfricaMovies />}
          {isTabActive === 'comingSoon' && <EmotionalAfricaMovies />}
          {isTabActive === 'comdeyAfrica' && <EmotionalAfricaMovies />}
        </div>
      </div>
    </div>
  )
}

export default MoviesPage;