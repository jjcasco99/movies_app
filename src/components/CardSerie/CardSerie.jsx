import React from 'react'
import './CardSerie.css'

const CardSerie = ( {id ,original_name, overview, poster_path}) => {
  return (
    <div className='cardSeries'>
      <div className='series'>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={id} id="serieImage" />
      </div>
      <div className='serie-backFace'>
        <p id='serieTitle'>{original_name}</p>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default CardSerie