import React from "react";
import { Route, Switch, Link, Redirect } from "wouter";
import CharacterFetcher from "./components/CharacterImagFetcher/Index";
import Home from "./pages/Home/Index"; // Importa el componente Home
import logo from "./Imagenes/Logo.png";
import logoHeart from "./Imagenes/LogoHeart.png";
import "./App.css";
import "./components/CharacterImagFetcher/HeartStyle.css";
import "./components/CharacterImagFetcher/KidStyle.css";

import logoKid from "./Imagenes/ImagKid/logoKid.png";

const App = () => {
  return (
    <div>
      <Switch>
        {/* Página principal */}
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
            <CharacterFetcher crew="mugiwara" />
          </div>
        </Route>

        {/* Ruta para ver la tripulación Piratas Heart */}
        <Route path="/heart">
          <div className="Heart">
            <Link to="/">
              <img className="logo" src={logoHeart} alt="logo" />
            </Link>
            <h1 className="titule">
              <strong>Piratas Heart</strong>
            </h1>
            <CharacterFetcher crew="heart" />
          </div>
        </Route>

        {/* Ruta para ver la tripulación de Kid */}
        <Route path="/kid">
          <div className="kid">
            <Link to="/">
              <img className="LogoKid" src={logoKid} alt="logo" />
            </Link>
            <h1 className="titule">
              <strong>Piratas de Kid</strong>
            </h1>
            <CharacterFetcher crew="kid" />
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
