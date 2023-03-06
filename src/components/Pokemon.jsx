import React from "react";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  const { pokemon } = props
  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`} className="Link">
        <div className="pokemon-card">
          <div className="pokemon-id"><p>#{pokemon.id}</p></div>
          <img src={ pokemon.sprites.other["official-artwork"].front_default } alt={ pokemon.name }/>
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
    </>
  );
};

export default Pokemon;
