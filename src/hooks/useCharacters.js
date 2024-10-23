import { useEffect, useContext } from "react";
import getCharacters from "../services/apiService"; 
import characterImages from "../components/CharacterImages/Index";
import { GlobalContext } from "../context/GlobalContext"; 

const useCharacters = (crew) => {
  const { setCharacters, setLoading } = useContext(GlobalContext); 

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true); // Establece el estado de carga a verdadero

      const cachedData = localStorage.getItem(`characters-${crew}`);
      if (cachedData) {
        setCharacters(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      const selectImag = characterImages[crew];

      try {
        const data = await getCharacters(crew);

        const filteredCharacters = data
          .filter(({ name }) => selectImag[name])
          .map(({ id, name, age, bounty }) => ({
            id,
            name,
            image: selectImag[name],
            age: age || "Edad no disponible",
            bounty: bounty || "Bounty no disponible",
          }));

        localStorage.setItem(`characters-${crew}`, JSON.stringify(filteredCharacters));
        setCharacters(filteredCharacters);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [crew, setCharacters, setLoading]);
}
export default useCharacters;