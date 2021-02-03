import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './bootstrap.min.css';
import React from 'react';
import NavbarTab from "./components/navbar";
import About from './components/About';
import Projects from "./components/Projects";
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <NavbarTab/>
 
        <Route exact path='/Home' component={Home} />
        <Route  exact path="/About"  component={About} />

        <Route exact path="/Projects"  component={Projects}/>


      </div>
    </BrowserRouter>
  );
}

export default App;
