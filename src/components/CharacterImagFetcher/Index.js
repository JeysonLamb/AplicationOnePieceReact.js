import { useEffect, useState } from "react";
import getCharacters from "../../services/apiService"; 
import characterImages from "../CharacterImages/Index"; 

const CharacterFetcher = ({ setCharacters, crew }) => {
  const [loading, setLoading] = useState(true); // Estado para controlar la carga de datos

  useEffect(() => {
    const fetchCharacters = async () => {
      setCharacters([])
      // Busco datos de la cache
      // Metodo getItem. 
      //Su función es recuperar un valor asociado a una clave específica en el almacenamiento local del navegado
      const cachedData = localStorage.getItem(`characters-${crew}`);
      
      if (cachedData) {
        // Si hay datos en caché, los utilízo
        setCharacters(JSON.parse(cachedData));
        //se utiliza para convertir una cadena JSON en un objeto JavaScript
        setLoading(false); //sino que carge
        return; // 
      }
      const selectImag = characterImages[crew];

      try {
        // Obtiene los datos de la API
        const data = await getCharacters(crew);

        const filteredCharacters = data
          .filter(({ name }) => selectImag[name]) 
          .map(({ id, name, age, bounty }) => ({
            id,
            name,
            image: selectImag[name], 
            age: age || "Edad no disponible", 
            bounty: bounty || "Bounty no disponible"
          }));
        // Almaceno los datos filtrados en caché para futuros llamados
        localStorage.setItem(`characters-${crew}`, JSON.stringify(filteredCharacters)); //Devuelve una cadena que representa el objeto.
        //setItem metodo 
        // funcion de la API localStorage que se usa para almacenar pares clave-valor en el almacenamiento local del navegador
        setCharacters(filteredCharacters); // Establece los personajes filtrados
      }finally {
        setLoading(false); // Cambia una vez que se completa la operación
      }
    };

    fetchCharacters(); 
  }, [setCharacters])
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p className="charge">Cargando personajes...</p>
      </div>
    );
  }
};

export default CharacterFetcher;