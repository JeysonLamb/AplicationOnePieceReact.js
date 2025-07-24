import React from "react";
import { Link } from "wouter";
import logoOp from "../../assets/Logo.webp"; 
import "../../Styles/home.css";
import "../../Styles/global.css";

const Home = () => {
  return (
    <div className="content1">
      <Link to="/">
        <img className="Logo" src={logoOp} alt="logo" />
      </Link>
      <h1 className="animate__animated animate__zoomInDown">
        Bienvenido a la Tripulación
      </h1>
      <nav>
        <Link href="/mugi">
          <button className="buttonMugiwara">
            <span> Piratas de Sombrero de Paja</span>
          </button>
        </Link>
        <Link href="/heart">
          <button className="buttonLaw">
            <span> Piratas Corazon</span>
          </button>
        </Link>
        <Link href="/Kid">
          <button className="buttonKid">
            <span> Piratas de Kid</span>
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
