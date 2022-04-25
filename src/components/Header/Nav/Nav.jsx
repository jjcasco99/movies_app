import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='navbar'>
        <ul className='nav-list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/films">Films</Link></li>
            <li><Link to="/series">Series</Link></li>
            <li><Link to="/favourites">Favourites</Link></li>
        </ul>
    </nav>
  )
}

export default Nav