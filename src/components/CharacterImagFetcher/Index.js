import React from "react";
//<------ HOOK para el llamado de las imagenes y el crew
import useCharacters from "../../hooks/useCharacters";

import CharacterCard from "../CharacterCard";

function CharacterFetcher({ crew }) {
  const { characters, loading } = useCharacters(crew);
  console.log("-");

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
