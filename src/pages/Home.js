import React, { useEffect } from "react";
import { Link } from "wouter";
import logoOp from "../Imagenes/LogoOp.png";
import "./home.css";
import 'animate.css';

const Home = () => {
  useEffect(() => {
    // Agregar la clase al body cuando este componente se monta
    document.body.classList.add("home-body");

    // Eliminar la clase cuando el componente se desmonta
    return () => {
      document.body.classList.remove("home-body");
    };
  }, []);

  return (
    <div>
      <Link to= "/"> 
      <img className="logoOP" src={logoOp} alt="logo" />
      </Link>
      <h1 className="animate__animated animate__zoomInDown" >Bienvenido a la Tripulación</h1>
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
      </nav>
    </div>
  );
};

export default Home;
