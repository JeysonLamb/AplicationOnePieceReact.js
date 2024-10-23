// ./components/PiratasHeart.js
import React from "react";
import { Link } from "wouter";
import CharacterImagFetcher from "../../components/CharacterImagFetcher/Index"; 
import logoCorazon from "../../Imagenes/LogoHeart.png"; 
import useCharacters from "../../hooks/useCharacters"; // Importar el hook

const PiratasHeart = () => {
  const crew = "heart"; // Definir el valor de crew
  useCharacters(crew); // Llamar al hook con el valor de crew

  return (
    <div className="Heart">
      <Link to="/">
        <img className="logo" src={logoCorazon} alt="logo" />
      </Link>
      <h1 className="titule">
        <strong>Piratas Corazon</strong>
      </h1>
      <CharacterImagFetcher crew={crew} /> {/* Pasar crew a CharacterImagFetcher */}
    </div>
  );
};

export default PiratasHeart;