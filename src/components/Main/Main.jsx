import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Films from '../../pages/Films/Films'
import Series from '../../pages/Series/Series'
import Favourites from '../../pages/Favourites/Favourites'

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/films" element={<Films />} />
            <Route path="/series"element={<Series />} />
            <Route path="/favourites" element={<Favourites />} />
        </Routes>
    </main>
  )
}

export default Main