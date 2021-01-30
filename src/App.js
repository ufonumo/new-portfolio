import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';

import NavbarTab from "./components/navbar";
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

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
