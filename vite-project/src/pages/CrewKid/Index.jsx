import React, { lazy, Suspense, useContext } from "react"; // Importar useContext
import { Link } from "wouter";
import logoKid from "../../assets/ImagKid/LogoKid.webp"; 
import useCharacters from "../../hooks/useCharacters";
import NavigationButtons from "../../components/NavigationButtons/Index"; 
import { GlobalContext } from "../../context/GlobalContext";  
import "../../Styles/CrewKid.css";
import "../../Styles/global.css";

const CharacterImagFetcher = lazy(() =>
  import("../../components/CharacterImagFetcher/Index")
);

const PiratasKid = () => {
  const crew = "kid"; 
  const { loading } = useContext(GlobalContext); // Obtener el estado de loading del contexto global
  useCharacters(crew); 

  return (
    <div className="kid">
      <Link to="/">
        <img className="LogoKid" src={logoKid} alt="logo" />
      </Link>
      <h1 className="titule">
        <strong>Piratas de Kid</strong>
      </h1>
      <Suspense fallback={loading}>
        <CharacterImagFetcher />
      </Suspense>

      {!loading && (
        <NavigationButtons
          prevRoute="/heart" 
          prevLabel="Anterior"
          nextRoute="/mugi" 
          nextLabel="Siguiente" 
        />
      )}
    </div>
  );
};

export default PiratasKid;