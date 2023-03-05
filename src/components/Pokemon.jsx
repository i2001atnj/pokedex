import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PokemonPage from "../pages/PokemonPage";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <>    
    <Link to="/pokemonpage" style={{textDecoration: 'none'}}>
      <div className="pokemon-card">
        <div className="pokemon-id"><p>#{pokemon.id}</p></div>
        <img src={pokemon.sprites.other.home.front_default } alt={pokemon.name}/>
        <div className="pokemon-name"><p>{pokemon.name}</p></div>
        <div className="pokemon-type">{pokemon.types.map((type, idx) => {
            return (
              <div key={idx} className="pokemon-type-text">
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
    <Routes>
      <Route path="/pokemonpage" element={ <PokemonPage/> } />
    </Routes>
    </>
  );
};

export default Pokemon;
