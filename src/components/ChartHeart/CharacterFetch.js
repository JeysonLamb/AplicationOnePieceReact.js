import { useEffect } from "react";
import getCharacters from "../../services/apiService";
import CharterImgHeart from "./CharterImgHeart"; // Importa las imágenes de los personajes

const CharacterFetcher = ({ setCharacters }) => {
  //   const [loading, setLoading] = useState(true); // Inicializa el estado de carga

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      const filteredCharacters = data
        .filter(({ name }) => CharterImgHeart[name])
        .map(({ id, name, age, bounty }) => ({
          id,
          name,
          image: CharterImgHeart[name],
          age: age || "Edad no disponible",
          bounty: bounty || "Bounty no disponible",
        }));

      setCharacters(filteredCharacters);
      //   setLoading(false); // Cambia a falso una vez cargados los personajes
    };

    fetchCharacters();
  }, [setCharacters]);
  //   if (loading) {
  //     return (
  //       <div className="loading">
  //         <div className="spinner"></div>
  //         <p className="charge"> Cargando personajes...</p>
  //       </div>
  //     )
  //   }
};

export default CharacterFetcher;
