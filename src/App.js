import React from "react";
import { Route} from "wouter";
import Home from "./pages/Home/Index"; 
import Mugiwaras from "./pages/CrewMugiwara/Index"; 
import PiratasHeart from "./pages/CrewHeart/Index"; 
import PiratasKid from "./pages/CrewKid/Index"; 
import { GlobalProvider } from "./context/GlobalContext"; 
import "./App.css";
import "./components/CharacterImagFetcher/HeartStyle.css";
import "./components/CharacterImagFetcher/KidStyle.css";

const App = () => {
  return (
    <GlobalProvider> {/* Envolvemos toda la app en el GlobalProvider */}
      <div>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/mugi">
            <Mugiwaras />
          </Route>
          <Route path="/heart">
            <PiratasHeart />
          </Route>
          <Route path="/kid">
            <PiratasKid />
          </Route>    
      </div>
    </GlobalProvider>
  );
};

export default App;