import React from "react";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  const { pokemon } = props
  return (
    <>
      <Link to={`/pokemon/${pokemon.name}`} className="Link">
        <div className="pokemon-card">
          <div className="pokemon-id"><p>#{pokemon.id}</p></div>
          <img src={ pokemon.sprites.other["official-artwork"].front_default } alt={ pokemon.name }/>
          <div className="pokemon-name"><p>{pokemon.name}</p></div>
        </div>
      </Link>
    </>
  );
};

export default Pokemon;
