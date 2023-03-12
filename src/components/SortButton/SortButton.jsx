import React from 'react'
import './SortButton.css'
import { SortVector } from '../../assets/Assets'

function SortButton() {
  return (
    <div className='sort-button'>
      <button><img src={ SortVector } alt=""/></button>
    </div>
  )
}

export default SortButton