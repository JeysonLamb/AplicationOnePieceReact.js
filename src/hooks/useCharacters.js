
import { useEffect, useState } from "react";
import getCharacters from "../services/apiService"; 
import characterImages from "../components/CharacterImages/Index"; 

const useCharacters = (crew) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setCharacters([]);
      
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
  }, [crew]);

  return { characters, loading };

}
export default useCharacters
