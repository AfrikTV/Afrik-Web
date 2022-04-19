// Homr page after the user successfully signed up
import React from 'react'
import ActionAfricaMovies from '../components/modules/HomePage/ActionAfrica';
import EmotionalAfricaMovies from '../components/modules/HomePage/EmotianalAfrica';
import VideoComponent from '../components/modules/HomePage/Video';

function MoviesPage() {
  return (
    <div className='my-5 m-0 '>
      <VideoComponent />
      <ActionAfricaMovies genres="Action African Movies" />
      <EmotionalAfricaMovies genres="Emotional African Movies" />
      <EmotionalAfricaMovies genres="Emotional African Movies" />
    </div>
  )
}

export default MoviesPage;