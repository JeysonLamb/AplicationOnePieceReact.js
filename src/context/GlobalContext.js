import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{ characters, setCharacters, loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};