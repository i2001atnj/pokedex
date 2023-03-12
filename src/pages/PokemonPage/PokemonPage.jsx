import React, { useEffect, useState } from 'react'
import "./PokemonPage.css"
import { Link, useParams } from 'react-router-dom'
import { ReturnVector, ChevronLeftVector, ChevronRightVector, WeightVector, HeightVector, Divider, StatsDivider } from '../../assets/Assets'
import { typeColor } from '../../components/Colors'

const PokemonPage = () => {

  const [pokemon, setPokemon] = useState(null);
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
  
  const themeColor = typeColor[pokemon.types[0].type.name];

  return (
    <div className='PokemonPage' style={{background: `${themeColor}`}}>
      <div className='PokemonPage-TitleSection'>
        <Link to="/"><img src={ ReturnVector } alt=""/></Link>
        <p id='TitleName'>{ pokemon.name }</p>
        <p id='TitleID'>#{ pokemon.id }</p>
      </div>
      <div className='PokemonPage-ImageSection'>
        <button id='ChevronLeft'><img src={ ChevronLeftVector } alt=""/></button>
        <div className='Silouette'>
          <img src={ pokemon.sprites.other["official-artwork"].front_default } alt=""/>
        </div>
        <button id='ChevronRight'><img src={ ChevronRightVector } alt=""/></button>
      </div>
      <div className='PokemonPage-CardSection'>
        <div className='Types'>
        {pokemon.types.map(pokemon => (
          <div className='Type' style={{ background: `${themeColor}` }} >
            <p>{ pokemon.type.name }</p>
          </div>)
        )}
        </div>
        <p id='About' style={{color: `${themeColor}`}} >About</p>
        <div className='Atributes'>
          <div className='Atribute'>
            <div className='AtributeInfo'>
              <img src={ WeightVector } alt=""/>
              <p id='p'>{ pokemon.weight / 10 } kg</p>
            </div>
            <p id='AtributeName'>Weight</p>
          </div>
          <img src={ Divider } alt="" />
          <div className='Atribute'>
            <div className='AtributeInfo'>
              <img src={ HeightVector } alt="" />
              <p id='p'>{ pokemon.height / 10 } m</p>
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
        <p id='PokemonInfo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, id ipsum neque assumenda tempora optio aspernatur modi ad hic aliquid. Cupiditate voluptas, ad recusandae harum libero facilis tempora error labore.</p>
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
