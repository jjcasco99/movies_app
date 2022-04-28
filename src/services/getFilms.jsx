import axios from 'axios'

const getFilms = async () => {
  const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  const resp = await axios.get(apiURL);
  const films = resp.data.results.map( listOfFilms => {
    const {id ,original_title, overview, poster_path} = listOfFilms;
    return {id ,original_title, overview, poster_path};
  })


  return films.slice(0,15);
}

export default getFilms