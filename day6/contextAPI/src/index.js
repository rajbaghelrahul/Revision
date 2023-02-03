import React, { createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';



const FirstName = createContext();
// const LastName = createContext();


const root = ReactDOM.createRoot(document.getElementById('root'));

const data = {
    firstName: "Raj",
    lastName: "Baghel"
};

root.render(
  <React.StrictMode>
    <FirstName.Provider value={data}>
      {/* <LastName.Provider value={"Baghel"}> */}
        <App />
      {/* </LastName.Provider> */}
      </FirstName.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
root();
export {FirstName};
