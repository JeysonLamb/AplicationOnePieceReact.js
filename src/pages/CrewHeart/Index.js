// ./components/PiratasHeart.js
import React from "react";
import { Link } from "wouter";
import CharacterFetcher from "../../components/CharacterImagFetcher/Index"; 
import logoCorazon from "../../Imagenes/LogoHeart.png"; 

const PiratasHeart = () => {
  return (
    <div className="Heart">
      <Link to="/">
        <img className="logo" src={logoCorazon} alt="logo" />
      </Link>
      <h1 className="titule">
        <strong>Piratas Corazon</strong>
      </h1>
      <CharacterFetcher crew="heart" />
    </div>
  );
};

export default PiratasHeart;