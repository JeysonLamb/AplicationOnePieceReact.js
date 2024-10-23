import React, { createContext, useState } from "react";

// Crear el contexto
export const GlobalContext = createContext();

// Crear el proveedor del contexto
// exite un proveedor y otro que almancena. 
export const GlobalProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);


  // <---     <GlobalContext.Provider value={{ characters, setCharacters, loading, setLoading }}>
// esto podria dar error
  return (
    <GlobalContext.Provider value={{ characters, setCharacters, loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};