import React, { useEffect } from "react";
import { Link } from "wouter";
import logoOp from "../../Imagenes/LogoOp.png";
import "./home.css"
import "animate.css";

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
          <button className="mugiwa">
            <span> Piratas de Sombrero de Paja</span>
          </button>
        </Link>
        <Link href="/heart">
          <button className="law">
            <span> Piratas Corazon</span>
          </button>
        </Link>
        <Link href="/Kid">
          <button className="kid1">
            <span> Piratas de Kid</span>
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
