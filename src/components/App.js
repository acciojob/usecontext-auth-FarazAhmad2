import React, { useState, createContext } from "react";
import "./../styles/App.css";
import Auth from "./Auth";

export const AuthContext = createContext();

const App = () => {
  const [tick, setTick] = useState(false);

  const handleChange = () => {
    setTick(!tick);
  };
  return (
    <AuthContext.Provider value={{ handleChange, tick }}>
      <h1>Click on the checkbox to get authenticated</h1>
      <Auth />
    </AuthContext.Provider>
  );
};

export default App;
