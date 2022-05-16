import axios from 'axios'

const getUpcoming = async () => {
  const apiURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  const resp = await axios.get(apiURL);
  const upcomingMovies = resp.data.results.map( upcoming => {
    const {id ,original_title, overview, poster_path} = upcoming;
    return {id ,original_title, overview, poster_path};
  })


  return upcomingMovies.slice(0,25);
}

export default getUpcoming