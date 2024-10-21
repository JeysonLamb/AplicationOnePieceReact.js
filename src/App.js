import React, { useState } from "react";
import { Route, Switch} from "wouter";
import Home from "./pages/Home/Index"; // Importa el componente Home
import Mugiwaras from "./pages/CrewMugiwara/Index"; // Importa el componente Mugiwaras
import PiratasHeart from "./pages/CrewHeart/Index"; // Importa el componente PiratasHeart
import PiratasKid from "./pages/CrewKid/Index"; // Importa el componente PiratasKid
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