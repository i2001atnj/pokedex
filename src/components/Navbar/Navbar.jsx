import React from "react";
import './Navbar.css'
import { Pokeball } from "../../assets/Assets";

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={ Pokeball } alt="Pokeball"/>
        <h1>Pokédex</h1>
    </div>
  );
};

export default Navbar;
