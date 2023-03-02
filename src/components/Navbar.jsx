import React from "react";
import Pokeball from '../assets/Pokeball.svg'

const Navbar = () => {

  return (
      <div className="navbar">
        <img src={ Pokeball } alt="" />
        <h1>Pokédex</h1>
      </div>
  );
};

export default Navbar;
