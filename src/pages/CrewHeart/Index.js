import React, { lazy, Suspense, useContext } from "react"; // Importar useContext
import { Link } from "wouter";
import logoCorazon from "Imagenes/LogoHeart.webp";
import useCharacters from "hooks/useCharacters";
import NavigationButtons from "components/NavigationButtons/Index";
import { GlobalContext } from "context/GlobalContext"; // Importar el contexto global
import "Styles/CrewHeart.css";
import "Styles/global.css";

const CharacterImagFetcher = lazy(() =>
  import("../../components/CharacterImagFetcher/Index")
);

const PiratasHeart = () => {
  const crew = "heart"; 
  const { loading } = useContext(GlobalContext); 
  useCharacters(crew); 

  return (
    <div className="Heart">
      <Link to="/">
        <img className="LogoCrew" src={logoCorazon} alt="logo" />
      </Link>
      <h1 className="titule">
        <strong>Piratas Corazón</strong>
      </h1>
      <Suspense fallback={loading}>
        <CharacterImagFetcher /> 
      </Suspense>
      {!loading && (
        <NavigationButtons
          prevRoute="/mugi" 
          prevLabel="Anterior"
          nextRoute="/kid" 
          nextLabel="Siguiente"
        />
      )}
    </div>
  );
};

export default PiratasHeart;