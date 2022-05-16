import React from 'react'
import './Card.css'

const Upcoming = ( {id ,original_title, overview, poster_path}) => {
  return (
    <div className='cardFilms'>
      <div className='upcoming-movies'>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={id} id="posterImage" />
      </div>
      <div className='backFace'>
        <p id='filmTitle'>{original_title}</p>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Upcoming