import React from "react";
import { Link } from "wouter";
import CharacterFetcher from "../../components/CharacterImagFetcher/Index"; // Asegúrate de que la ruta sea correcta
import logo from "../../Imagenes/Logo.png"

const Mugiwaras = () => {
  return (
    <div className="Mugiwaras">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <h1>
        <strong>Tripulación Mugiwara</strong>
      </h1>
      <CharacterFetcher crew="mugiwara" />
    </div>
  );
};

export default Mugiwaras;