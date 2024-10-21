import React from "react";
import { Link } from "wouter";
import CharacterFetcher from "../../components/CharacterImagFetcher/Index"; 
import logoKid from "../../Imagenes/ImagKid/logoKid.png"; 

const PiratasKid = () => {
  return (
    <div className="kid">
      <Link to="/">
        <img className="LogoKid" src={logoKid} alt="logo" />
      </Link>
      <h1 className="titule">
        <strong>Piratas de Kid</strong>
      </h1>
      <CharacterFetcher crew="kid" />
    </div>
  );
};

export default PiratasKid;