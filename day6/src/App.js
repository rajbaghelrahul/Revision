import React, { createContext } from "react";
import "./App.css";
import CompA from "./Components/CompA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Raj"}>
      <LastName.Provider value={"Baghel"}>
        <CompA />
      </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export {FirstName, LastName};
