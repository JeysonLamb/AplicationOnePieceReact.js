// services/apiService.js
const getCharacters = async () => {
  const response = await fetch("https://api.api-onepiece.com/v2/characters/en");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json(); // Devuelve los datos en formato JSON
};

export default getCharacters;
