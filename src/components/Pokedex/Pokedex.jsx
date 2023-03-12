import React from "react";
import { Pagination, Loader, PokemonCard } from '../Components'
import './Pokedex.css'

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div className="main">
      <>
        <Pagination page={ page + 1 } totalPages={ total } onLeftClick={ lastPage } onRightClick={ nextPage }/>
      </>
      { loading ? <Loader/> : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.name}/>;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
