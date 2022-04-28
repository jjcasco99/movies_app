import React from 'react'
import './Card.css'

const Upcoming = ( {id ,original_title, overview, poster_path}) => {
  return (
    <div className='position'>
      <div className='upcoming-movies'>
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={id} />
          <h3>{original_title}</h3>
          <p>{overview}</p>
      </div>
    </div>
  )
}

export default Upcoming