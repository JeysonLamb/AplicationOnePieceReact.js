
import React from "react";
import { Route} from "wouter";
import Home from "pages/Home/Index"; 
import Mugiwaras from "pages/CrewMugiwara/Index"; 
import PiratasHeart from "pages/CrewHeart/Index"; 
import PiratasKid from "pages/CrewKid/Index"; 
import { GlobalProvider } from "context/GlobalContext"; 
import "Styles/global.css";
import "Styles/ScrollBar.css"
const App = () => {
  return (
    <GlobalProvider>
      <div>
      <Route path="/" component={Home} />
      <Route path="/mugi" component={Mugiwaras} />
      <Route path="/heart" component={PiratasHeart} />
      <Route path="/kid" component={PiratasKid} />
      </div>
    </GlobalProvider>
    
  );
};

export default App;