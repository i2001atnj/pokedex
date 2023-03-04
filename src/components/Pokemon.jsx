import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
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
  );
};

export default Pokemon;
