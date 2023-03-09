import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReturnVector from '../assets/ReturnVector.svg'
import ChevronLeftVector from '../assets/ChevronLeftVector.svg'
import ChevronRightVector from '../assets/ChevronRightVector.svg'
import WeightVector from '../assets/WeightVector.svg'
import HeightVector from '../assets/HeightVector.svg'
import Divider from '../assets/Divider.svg'
import StatsDivider from '../assets/StatsDivider.svg'

const PokemonPage = () => {

  const [pokemon, setPokemon] = useState(null)
  
  const {name} = useParams()
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((json) => {
      setPokemon(json)
    })
  }, [name])

  if (!pokemon) {
    return null;
  }

  const typeColor = {
    bug: "#A7B723",
    dark: "#75574C",
    dragon: "#7037FF",
    electric: "#F9CF30",
    fairy: "#E69EAC",
    fighting: "#C12239",
    fire: "#F57D31",
    flying: "#A891EC",
    ghost: "#70559B",
    normal: "#AAA67F",
    grass: "#74CB48",
    ground: "#DEC16B",
    ice: "#9AD6DF",
    poison: "#A43E9E",
    psychic: "#FB5584",
    rock: "#B69E31",
    steel: "#B7B9D0",
    water: "#6493EB"
  }

  const themeColor = typeColor[pokemon.types[0].type.name];

  return (
    <div className='PokemonPage' style={{background: `${themeColor}`}}>
      <div className='PokemonPage-TitleSection'>
        <Link to="/"><img src={ ReturnVector } alt=""/></Link>
        <p id='TitleName'>{ pokemon.name }</p>
        <p id='TitleID'>#{ pokemon.id }</p>
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
        { pokemon.types.map(pokemon => (
          <div className='Type'>
            <p>{ pokemon.type.name }</p>
          </div>)
        ) }
        </div>
        <p id='About' style={{color: `${themeColor}`}} >About</p>
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
            {pokemon.abilities.map(pokemon => (
              <p>{ pokemon.ability.name }</p>)
            )}
            </div>
            <p id='AtributeName'>Moves</p>
          </div>
        </div>
        <p id='PokemonInfo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat quam rem exercitationem? Natus amet ex cum, explicabo harum dolor voluptatibus velit nostrum dignissimos soluta exercitationem similique sed tempora assumenda?</p>
        <p id='StatsTitle' style={{color: `${themeColor}`}}>Base Stats</p>
        <div className='Stats'>
          <div className='StatsTitles' style={{color: `${themeColor}`}}>
            <p>HP</p>
            <p>ATK</p>
            <p>DEF</p>
            <p>SATK</p>
            <p>SDEF</p>
            <p>SPD</p>
          </div>
          <div className='StatsDivider'>
            <img src={ StatsDivider } alt="" />
          </div>
          <div className='StatsInfo'>
            <p>{pokemon.stats[0].base_stat}</p>
            <p>{pokemon.stats[1].base_stat}</p>
            <p>{pokemon.stats[2].base_stat}</p>
            <p>{pokemon.stats[3].base_stat}</p>
            <p>{pokemon.stats[4].base_stat}</p>
            <p>{pokemon.stats[5].base_stat}</p>
          </div>
          <div className='StatsBars'>
            <div class="animated-progress">
                <span style={{width: `${pokemon.stats[0].base_stat}%`, background: `${themeColor}`}}></span>
              </div>
              <div class="animated-progress">
                <span style={{width: `${pokemon.stats[1].base_stat}%`, background: `${themeColor}`}}></span>
              </div>
              <div class="animated-progress">
                <span style={{width: `${pokemon.stats[2].base_stat}%`, background: `${themeColor}`}}></span>
              </div>
              <div class="animated-progress">
                <span style={{width: `${pokemon.stats[3].base_stat}%`, background: `${themeColor}`}}></span>
              </div>
              <div class="animated-progress">
                <span style={{width: `${pokemon.stats[4].base_stat}%`, background: `${themeColor}`}}></span>
              </div>
              <div class="animated-progress">
                <span style={{width: `${pokemon.stats[5].base_stat}%`, background: `${themeColor}`}}></span>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonPage
