import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='navbar'>
        <ul className='nav-list'>
            <li><Link to="/">Top rated movies</Link></li>
            <li><Link to="/films">Search films</Link></li>
            <li><Link to="/series">Search series</Link></li>
        </ul>
    </nav>
  )
}

export default Nav