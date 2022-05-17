import axios from 'axios'

const getSeries = async () => {
  const apiURL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=4&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
  const resp = await axios.get(apiURL);
  const series = resp.data.results.map( listOfSeries => {
    const {id ,original_name, overview, poster_path} = listOfSeries;
    return {id ,original_name, overview, poster_path};
  })


  return series.slice(0,15);
}

export default getSeries