// ./components/Mugiwaras.js
import React from "react";
import { Link } from "wouter";
import CharacterImagFetcher from "../../components/CharacterImagFetcher/Index";
import logoMugi from "../../Imagenes/Logo.png";
import useCharacters from "../../hooks/useCharacters";

const Mugiwaras = () => {
  const crew = "mugiwara"; // Definir el valor de crew
  useCharacters(crew); // Llamar al hook con el valor de crew

  return (
    <div className="Mugiwaras">
      <Link to="/">
        <img className="logo" src={logoMugi} alt="logo" />
      </Link>
      <h1>
        <strong>Tripulación Mugiwara</strong>
      </h1>
      <CharacterImagFetcher crew={crew} /> {/* Pasar crew a CharacterImagFetcher */}
    </div>
  );
};

export default Mugiwaras;
