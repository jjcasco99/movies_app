import {React, useEffect, useState} from 'react'
import Card from '../../components/Card/Card'
import getUpcoming from '../../services/getUpcoming'
import './Home.css'

const Home = () => {
  const [upcomingCardMovies, setUpcomingMovies] = useState([])
  useEffect(() => {
    getUpcoming().then(upcoming => setUpcomingMovies(upcoming))
  }, [])
  

  return (
    <div className='home'>
      {
        upcomingCardMovies.map(({id ,original_title, overview, poster_path}) => <Card original_title={original_title} overview={overview} poster_path={poster_path}  key={id} />)
      }
    </div>
  )
}

export default Home