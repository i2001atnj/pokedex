import React from 'react'
import SortVector from '../assets/SortVector.svg'

function SortButton() {
  return (
    <div className='dropdown'>
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={ SortVector } alt="" /></button>
    </div>
  )
}

export default SortButton