import React from "react";
import carta from '../../assets/carta.webp'; 
const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} loading="lazy" />
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
