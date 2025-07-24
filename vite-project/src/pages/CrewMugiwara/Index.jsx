import React, { lazy, Suspense, useContext } from "react"; 
import { Link } from "wouter"; 
import logoMugi from "../../assets/Logo.webp";
import useCharacters from "../../hooks/useCharacters";
import NavigationButtons from "../../components/NavigationButtons/Index"; 
import { GlobalContext } from "../../context/GlobalContext"; 
import "../../Styles/CrewMugiwara.css";
import "../../Styles/global.css";

// Cargar CharacterFetcher de manera diferida
const CharacterFetcher = lazy(() =>
  import("../../components/CharacterImagFetcher/Index")
);

const Mugiwaras = () => {
  const crew = "mugiwara"; // Definir el valor de crew
  const { loading } = useContext(GlobalContext); // Obtener el estado de loading del contexto global
  useCharacters(crew); // Llamar al hook con el valor de crew

  return (
    <div className="Mugiwaras">
      <Link to="/">
        <img className="LogoCrew" src={logoMugi} alt="logo" />
      </Link>
      <h1>
        <strong>Tripulación Mugiwara</strong>
      </h1>
      <Suspense fallback={loading}>
        <CharacterFetcher /> 
      </Suspense>
      {!loading && (
        <NavigationButtons
          prevRoute="/kid" 
          prevLabel="Anterior"
          nextRoute="/heart" 
          nextLabel="Siguiente"
        />
      )}
    </div>
  );
};

export default Mugiwaras;