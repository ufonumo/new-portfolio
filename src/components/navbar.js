import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import logo from "../assets/Logo.svg";
import Home from './Home';
import About from './About';
import Projects from "./Projects";

const NavbarTab = () =>{
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () =>{
    if(window.scrollY >= 100){
      setNavbar(true)
    }
    else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)

 
    return(
      <div className='container'>
        <Navbar  fixed="top" className={navbar ? 'navbar active container' : 'navbar container'}  expand="lg">
          <Navbar.Brand > <Link to='/'  className="nav-link "> <img src={logo} />Umo</Link>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link > <Link to="/Home" className="nav-link link">Home</Link> </Nav.Link>
                  <Nav.Link > <Link to="/About" className="nav-link link">About Me</Link> </Nav.Link>
                  <Nav.Link > <Link to="/Projects" className="nav-link link">Projects</Link> </Nav.Link>
                  <Nav.Link > <Link to="/UpdateOnstocks" id='contact' className="nav-link link">Say Hello</Link> </Nav.Link>
               </Nav>
              
          </Navbar.Collapse>
        </Navbar>

        {/* HOME SECTION */}

        <Home/>
        <About/>

        {/* ABOUT ME SECTION */}


      </div>  
    )
};

export default NavbarTab;