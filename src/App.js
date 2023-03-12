import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import { Homepage, PokemonPage } from './pages/Pages'

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
