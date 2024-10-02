const API_URL = "https://api.api-onepiece.com/v2/characters/en";

const getCharacters = async () => {
  
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export default getCharacters;