import axios from 'axios'

const searchFilms = async ( keyword ) => {
  const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
  const resp = await axios.get(apiURL);
  const film = resp.data.results.map( oneFilm => {
    const {id ,original_title, overview, poster_path} = oneFilm;
    return {id ,original_title, overview, poster_path};
  })


  return film.slice(0,15);
}

export default searchFilms