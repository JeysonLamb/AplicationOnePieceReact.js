import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalContext"; // Importar el contexto global
import CharacterCard from "../CharacterCard";
import NavigationButtons from "components/NavigationButtons/Index"; // Asegúrate de que la ruta sea correcta

function CharacterFetcher({ prevRoute, nextRoute }) {
  const { characters, loading } = useContext(GlobalContext); // Acceder al contexto global

  return (
    <div>
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <ul>
            {characters.map((char) => (
              <li key={char.id}>
                <CharacterCard character={char} />
              </li>
            ))}
          </ul>
          {/* Mostrar botones de navegación solo si no se está cargando */}
          <NavigationButtons prevRoute={prevRoute} nextRoute={nextRoute} />
        </>
      )}
    </div>
  );
}

export default React.memo(CharacterFetcher)