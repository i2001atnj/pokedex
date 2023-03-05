import React from "react";
import Pokeball from '../assets/Pokeball.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to="/" style={{textDecoration: 'none'}}>
      <div className="navbar">
          <img src={ Pokeball } alt="Pokeball"/>
          <h1>Pokédex</h1>
      </div>
    </Link>
  );
};

export default Navbar;
