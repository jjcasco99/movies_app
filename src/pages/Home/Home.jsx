import {React, useEffect, useState} from 'react'
import Upcoming from '../../components/Upcoming/Upcoming'
import getUpcoming from '../../services/getUpcoming'
import './Home.css'

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])
  useEffect(() => {
    getUpcoming().then(upcoming => setUpcomingMovies(upcoming))
  }, [])
  

  return (
    <div className='home'>
      {
        upcomingMovies.map(({id ,original_title, overview, poster_path}) => <Upcoming original_title={original_title} overview={overview} poster_path={poster_path}  key={id} />)
      }
    </div>
  )
}

export default Home