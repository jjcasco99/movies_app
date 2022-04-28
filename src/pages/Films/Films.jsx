import {React, useEffect, useState} from 'react'
import getFilms from '../../services/getFilms'
import searchFilms from '../../services/searchFilms'
import Card from '../../components/Card/Card'
import './Films.css'


const Films = () => {
  const [filmSearch, setFilmSearch] = useState('');
  const [films, setFilms] = useState([]);

  const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
 
  //ARREGLAR REGEX!
  const handleSubmit = (e) => {
    const regex = RegExp(escapeRegex(e.target.film.value))
    e.preventDefault();
    if (regex !== '/(?:)/') setFilmSearch(regex)
    e.target.film.value="";
  }
  console.log(filmSearch)
  useEffect(() => {
   filmSearch ? searchFilms(filmSearch).then(film =>  setFilms(film) ) : getFilms().then(films => setFilms(films))
  }, [filmSearch])

  return (
    <div className='films'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="film">Busca tu película</label>
        <input type="text" name="film" id="film" />
      </form>
      {
        films.map(({id ,original_title, overview, poster_path}) => <Card original_title={original_title} overview={overview} poster_path={poster_path}  key={id} />)
      }
    </div>
  )
}

export default Films