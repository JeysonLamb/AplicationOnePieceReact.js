import React from "react";
import carta from '../../Imagenes/carta.png'; // Imagen para la parte trasera de la carta
import './CharacterCard.css'; // Archivo CSS importado
const CharacterCard = ({ character }) => {

  return (
    <div className="card" >
      <div className="card-inner">
        <div className="card-front">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>Edad: {character.age}</p>
          <p>Bounty: {character.bounty}</p>
        </div>
        <div className="card-back">
          <img src={carta} alt="Carta" />
        </div>
      </div>
    </div>
  );
};
export default CharacterCard;
