import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import logo from "../assets/Logo.svg";
import vector from "../assets/Vector.svg";
import photo from '../assets/Ellipse 1.svg';
import scroll from "../assets/Scroll.svg";
import About from './About';


const NavbarTab = () =>{

  let listener = null
  const [scrollState, setScrollState] = useState("top")

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])
  
    return(
      <div className='container'>
        <Navbar fixed="top" className='container' expand="lg">
          <Navbar.Brand > <Link to='/'  className="nav-link "> <img src={logo} />Umo</Link>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link > <Link to="/Home" className="nav-link link">Home</Link> </Nav.Link>
                  <Nav.Link > <Link to="/About" className="nav-link link">About Me</Link> </Nav.Link>
                  <Nav.Link > <Link to="/UpdateOnstocks" className="nav-link link">Projects</Link> </Nav.Link>
                  <Nav.Link > <Link to="/UpdateOnstocks" id='contact' className="nav-link link">Say Hello</Link> </Nav.Link>
               </Nav>
              
          </Navbar.Collapse>
        </Navbar>

        {/* HOME SECTION */}


        {/* ABOUT ME SECTION */}
        {/* <About/> */}

        {/* SKILLS */}

     



      </div>  
    )
};

export default NavbarTab;