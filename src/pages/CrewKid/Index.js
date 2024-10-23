// ./components/PiratasKid.js
import React from "react";
import { Link } from "wouter";
import CharacterImagFetcher from "../../components/CharacterImagFetcher/Index"; 
import logoKid from "../../Imagenes/ImagKid/logoKid.png"; 
import useCharacters from "../../hooks/useCharacters"; // Importar el hook

const PiratasKid = () => {
  const crew = "kid"; // Definir el valor de crew
  useCharacters(crew); // Llamar al hook con el valor de crew

  return (
    <div className="kid">
      <Link to="/">
        <img className="LogoKid" src={logoKid} alt="logo" />
      </Link>
      <h1 className="titule">
        <strong>Piratas de Kid</strong>
      </h1>
      <CharacterImagFetcher crew={crew} /> {/* Pasar crew a CharacterImagFetcher */}
    </div>
  );
};

export default PiratasKid;