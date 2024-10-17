import React, { useState } from "react";
import { Route, Switch, Link, Redirect } from "wouter";
import CharacterCard from "./components/CharacterCard/index";
import CharacterFetcher from "./components/CharacterImagFetcher/Index";
import Home from "./pages/Home/Index"; // Importa el componente Home
import logo from "./Imagenes/Logo.png";
import logoHeart from "./Imagenes/LogoHeart.png";
import "./App.css";
import "./components/CharacterImagFetcher/HeartStyle.css";
import "./components/CharacterImagFetcher/KidStyle.css";

import logoKid from "./Imagenes/ImagKid/logoKid.png";
const App = () => {
  const [characters, setCharacters] = useState([]);

  return (
    <div>
      <Switch>
        {/* Página principal que solo muestra los botones de navegación */}
        <Route path="/">
          <Home />
        </Route>

        {/* Ruta para ver la tripulación Mugiwara */}
        <Route path="/mugi">
          <div className="Mugiwaras">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <h1>
              <strong>Tripulación Mugiwara</strong>
            </h1>
            <CharacterFetcher setCharacters={setCharacters} crew="mugiwara" />
            <ul>
              {characters.map((char) => (
                <li key={char.id}>
                  <CharacterCard character={char} />
                </li>
              ))}
            </ul>
          </div>
        </Route>

        {/* Ruta para ver la tripulación Piratas Heart */}
        <Route path="/heart">
          <div className="Heart ">
            <Link to="/">
              <img className="logo" src={logoHeart} alt="logo" />
            </Link>
            <h1 className="titule">
              <strong>Piratas Heart</strong>
            </h1>
            <CharacterFetcher setCharacters={setCharacters} crew="heart" />
            <ul>
              {characters.map((char) => (
                <li key={char.id}>
                  <CharacterCard character={char} />
                </li>
              ))}
            </ul>
          </div>
        </Route>

        <Route path="/kid">
          <div className="kid ">
            <Link to="/">
              <img className="LogoKid" src={logoKid} alt="logo" />
            </Link>
            <h1 className="titule">
              <strong>Piratas de Kit</strong>
            </h1>
            <CharacterFetcher setCharacters={setCharacters} crew="kid" />
            <ul>
              {characters.map((char) => (
                <li key={char.id}>
                  <CharacterCard character={char} />
                </li>
              ))}
            </ul>
          </div>
        </Route>

        {/* Redirección a Home si no existe la ruta */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
