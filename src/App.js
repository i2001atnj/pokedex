import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PokemonPage from './pages/PokemonPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Homepage/> } />
      <Route path='/pokemonpage' element={ <PokemonPage/> } />
    </Routes>
  )
}

export default App
