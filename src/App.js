import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PokemonPage from './pages/PokemonPage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Homepage/> } />
        <Route path='pokemon/:name' element={ <PokemonPage/> } />
      </Routes>
    </div>
  )
}

export default App
