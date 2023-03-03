import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img src={pokemon.sprites.other.home.front_default } alt={pokemon.name} className="pokemon-img"/>
      </div>
      <div className="card-body">
        <div className="card-top">
          <p>{pokemon.name}</p>
          <div className="pokemon-id">#{pokemon.id}</div>
        </div>
        <p>{pokemon.type}</p>
        <div className="pokemon-type">
          {pokemon.types.map((type, idx) => {
            return (
              <div key={idx} className="pokemon-type-text">
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
