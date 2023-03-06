import React from 'react'
import { Link } from 'react-router-dom'
import ReturnVector from '../assets/ReturnVector.svg'
import ChevronLeftVector from '../assets/ChevronLeftVector.svg'
import ChevronRightVector from '../assets/ChevronRightVector.svg'
import PokemonPageImage from '../assets/PokemonPageImage.svg'
import WeightVector from '../assets/WeightVector.svg'
import HeightVector from '../assets/HeightVector.svg'
import Divider from '../assets/Divider.svg'

const PokemonPage = () => {

  

  return (
    <div className='PokemonPage'>
      <div className='PokemonPage-TitleSection'>
        <Link to="/"><img src={ ReturnVector } alt=""/></Link>
        <p id='TitleName'>Pokemon Name</p>
        <p id='TitleID'>#ID</p>
      </div>
      <div className='PokemonPage-ImageSection'>
        <button id='ChevronLeft'><img src={ ChevronLeftVector } alt="" /></button>
        <div className='Silouette'>
          <img src={ PokemonPageImage } alt=""/>
        </div>
        <button id='ChevronRight'><img src={ ChevronRightVector } alt="" /></button>
      </div>
      <div className='PokemonPage-CardSection'>
        <div className='Types'>
          <div className='Type'>
            <p>Type</p>
          </div>
          <div className='Type'>
            <p>Type</p>
          </div>
        </div>
        <p id='About'>About</p>
        <div className='Atributes'>
          <div className='Atribute'>
            <div className='AtributeInfo'>
              <img src={ WeightVector } alt="" />
              <p id='p'>9,9 kg</p>
            </div>
            <p id='AtributeName'>Weight</p>
          </div>
          <img src={ Divider } alt="" />
          <div className='Atribute'>
            <div className='AtributeInfo'>
              <img src={ HeightVector } alt="" />
              <p id='p'>9,9 kg</p>
            </div>
            <p id='AtributeName'>Weight</p>
          </div>
          <img src={ Divider } alt="" />
          <div className='Atribute'>
            <div className='AtributeInfo MovesInfo'>
              <p>Ability 1</p>
              <p>Ability 2</p>
            </div>
            <p id='AtributeName'>Moves</p>
          </div>
        </div>
        <p id='PokemonInfo'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, similique ratione. Dolores voluptatibus nesciunt cupiditate eum optio pariatur veritatis odit. Nesciunt voluptatibus quam nostrum quidem aperiam ipsam rem numquam adipisci?</p>
        <p id='StatsTitle'>Base Stats</p>
        <div className='Stats'>
          <div className='Stat HP'>HP</div>
          <div className='Stat ATK'>ATK</div>
          <div className='Stat DEF'>DEF</div>
          <div className='Stat SATK'>SATK</div>
          <div className='Stat SDEF'>SDEF</div>
          <div className='Stat SPD'>SPD</div>
        </div>
      </div>
    </div>
  )
}

export default PokemonPage
