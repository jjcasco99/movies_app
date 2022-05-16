import {React, useEffect, useState} from 'react'
import getSeries from '../../services/getSeries'
import searchSeries from '../../services/searchSeries'
import CardSerie from '../../components/CardSerie/CardSerie'


const Series = () => {
  const [serieSearch, setSerieSearch] = useState('');
  const [series, setSeries] = useState([]);

  const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
 
  //ARREGLAR REGEX!
  const handleSubmit = (e) => {
    const regex = RegExp(escapeRegex(e.target.film.value))
    e.preventDefault();
    if (regex !== '/(?:)/') setSerieSearch(regex)
    e.target.film.value="";
  }
 
  useEffect(() => {
    serieSearch ? searchSeries(serieSearch).then(serie => setSeries(serie)) : getSeries().then(series => setSeries(series))
  }, [serieSearch])

  return (
    <div className='globalElement'>
      <div id="searcherFilm">
        <form onSubmit={handleSubmit} id="searchForm">
          <label htmlFor="film" id="labelText">Search your series!</label>
          <input type="text" name="film" id="film"/>
        </form>
      </div>
      <div className='films'>
        {
         series.map(({id ,original_name, overview, poster_path}) => <CardSerie original_name={original_name} overview={overview} poster_path={poster_path}  key={id} />)
        }
      </div>
    </div>
  )
}

export default Series