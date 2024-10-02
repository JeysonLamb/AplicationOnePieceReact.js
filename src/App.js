import React, { useState } from 'react';
import CharacterCard from './components/chartersCard'; // Asegúrate de importar el componente de la carta
import CharacterFetcher from './components/CharacterFetcher';
import logo from "./Imagenes/LogoOP.png"

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  return (
    <div>
      <img className='logo' src={logo} alt="logo" />
      <h1>Tripulacion Mugiwara</h1>
      <CharacterFetcher setCharacters={setCharacters} /> 
      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            <CharacterCard character={char} /> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;