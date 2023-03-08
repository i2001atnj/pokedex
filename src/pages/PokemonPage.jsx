import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReturnVector from '../assets/ReturnVector.svg'
import ChevronLeftVector from '../assets/ChevronLeftVector.svg'
import ChevronRightVector from '../assets/ChevronRightVector.svg'
import WeightVector from '../assets/WeightVector.svg'
import HeightVector from '../assets/HeightVector.svg'
import Divider from '../assets/Divider.svg'

const PokemonPage = () => {

  const [pokemon, setPokemon] = useState(null)

  const {name} = useParams()
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((r) => r.json())
    .then((json) => {
      setPokemon(json)
    })
  }, [name])

  if (!pokemon) {
    return null;
  }

  return (
    <div className='PokemonPage' style={ { background: "#B8B8B8" } } >
      <div className='PokemonPage-TitleSection'>
        <Link to="/"><img src={ ReturnVector } alt=""/></Link>
        <p id='TitleName'>{ pokemon.name }</p>
        <p id='TitleID'>#00{ pokemon.id }</p>
      </div>
      <div className='PokemonPage-ImageSection'>
        <button id='ChevronLeft'><img src={ ChevronLeftVector } alt="" /></button>
        <div className='Silouette'>
          <img src={ pokemon.sprites.other["official-artwork"].front_default } alt=""/>
        </div>
        <button id='ChevronRight'><img src={ ChevronRightVector } alt="" /></button>
      </div>
      <div className='PokemonPage-CardSection'>
        <div className='Types'>
          <div className='Type'>
            <p>{ pokemon.types[0].type.name }</p>
          </div>
          <div className='Type'>
            <p>{ pokemon.types[1].type.name }</p>
          </div>
        </div>
        <p id='About'>About</p>
        <div className='Atributes'>
          <div className='Atribute'>
            <div className='AtributeInfo'>
              <img src={ WeightVector } alt=""/>
              <p id='p'>{ pokemon.weight } kg</p>
            </div>
            <p id='AtributeName'>Weight</p>
          </div>
          <img src={ Divider } alt="" />
          <div className='Atribute'>
            <div className='AtributeInfo'>
              <img src={ HeightVector } alt="" />
              <p id='p'>{ pokemon.height } m</p>
            </div>
            <p id='AtributeName'>Height</p>
          </div>
          <img src={ Divider } alt="" />
          <div className='Atribute'>
            <div className='AtributeInfo MovesInfo'>
              <p>{ pokemon.abilities[1].ability.name }</p>
              <p>{ pokemon.abilities[0].ability.name }</p>
            </div>
            <p id='AtributeName'>Moves</p>
          </div>
        </div>
        <p id='PokemonInfo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat quam rem exercitationem? Natus amet ex cum, explicabo harum dolor voluptatibus velit nostrum dignissimos soluta exercitationem similique sed tempora assumenda?</p>
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
