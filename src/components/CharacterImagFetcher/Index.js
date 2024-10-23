import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext"; // Importar el contexto global
import CharacterCard from "../CharacterCard";

function CharacterFetcher() {
  const { characters, loading } = useContext(GlobalContext); // Acceder al contexto global
  console.log("-");

  //<---- utilizo operardor ternario.
  return loading ? (
    <div className="loading">
      <div className="spinner"></div>
      <p className="charge">Cargando personajes...</p>
    </div>
  ) : (
    <ul>
      {characters.map((char) => (
        <li key={char.id}>
          <CharacterCard character={char} />
        </li>
      ))}
    </ul>
  );
}

export default React.memo(CharacterFetcher);
//memo, compara las props que le llega, si son iguales no las renderiza