import React, { useState } from "react";
import { Route, Switch} from "wouter";
import Home from "./pages/Home/Index"; // Importa el page Home
import Mugiwaras from "./pages/CrewMugiwara/Index"; // Importa el page Mugiwaras
import PiratasHeart from "./pages/CrewHeart/Index"; // Importa el page PiratasHeart
import PiratasKid from "./pages/CrewKid/Index"; // Importa el page PiratasKid
import "./App.css";
import "./components/CharacterImagFetcher/HeartStyle.css";
import "./components/CharacterImagFetcher/KidStyle.css";

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
          <Mugiwaras setCharacters={setCharacters} characters={characters} />
        </Route>
        {/* Ruta para ver la tripulación Piratas Heart */}
        <Route path="/heart">
          <PiratasHeart setCharacters={setCharacters} characters={characters} />
        </Route>
        {/* Ruta para ver la tripulación de Kid */}
        <Route path="/kid">
          <PiratasKid setCharacters={setCharacters} characters={characters} />
        </Route>    
      </Switch>
    </div>
  );
};

export default App;