import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './bootstrap.min.css';
import React from 'react';
import NavbarTab from "./components/navbar";


function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <NavbarTab/>
      </div>
     </BrowserRouter>
  );
}

export default App;
