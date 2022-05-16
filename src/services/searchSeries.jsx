import axios from 'axios'

const searchSeries = async ( keyword ) => {
  const apiURL = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${keyword}&include_adult=false`
  const resp = await axios.get(apiURL);
  const serie = resp.data.results.map( oneSerie => {
    const {id ,original_name, overview, poster_path} = oneSerie;
    return {id ,original_name, overview, poster_path};
  })


  return serie.slice(0,15);
}

export default searchSeries