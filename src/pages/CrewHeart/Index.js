// ./components/PiratasHeart.js
import React from "react";
import { Link } from "wouter";
import CharacterFetcher from "../../components/CharacterImagFetcher/Index"; // Asegúrate de que la ruta sea correcta
import logoHeart from "../../Imagenes/LogoHeart.png"; // Ajusta la ruta de la imagen

const PiratasHeart = () => {
  return (
    <div className="Heart">
      <Link to="/">
        <img className="logo" src={logoHeart} alt="logo" />
      </Link>
      <h1 className="titule">
        <strong>Piratas Heart</strong>
      </h1>
      <CharacterFetcher crew="heart" />
    </div>
  );
};

export default PiratasHeart;