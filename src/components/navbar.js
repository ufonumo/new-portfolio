import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import logo from "../assets/Logo.svg";
import vector from "../assets/Vector.svg";

const NavbarTab = () =>{
    return(
      <div className='container'>
        <Navbar fixed="top" expand="lg">
          <Navbar.Brand > <Link to='/'  className="nav-link "> <img src={logo} />Umo</Link>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link > <Link to="/" className="nav-link link">Home</Link> </Nav.Link>
                  <Nav.Link > <Link to="/stock_API" className="nav-link link">About Me</Link> </Nav.Link>
                  <Nav.Link > <Link to="/UpdateOnstocks" className="nav-link link">Projects</Link> </Nav.Link>
                  <Nav.Link > <Link to="/UpdateOnstocks" id='contact' className="nav-link link">Say Hello</Link> </Nav.Link>
               </Nav>
              
          </Navbar.Collapse>
        </Navbar>

        <section id='home'>
          <div className="row ">
            <div className="col-lg-7 white">
              <sub>Hi there <img src={vector} alt="love"/></sub>
              <p>I’m <b>Ufonabasi Umo,</b> Frontend Developer,with a hands-on experience using Html. Css, bootstrap, SASS and Javascript to create and implement web applications.</p>
              <a href="#"><button className='btn'>View My Projects</button></a> 
            </div>
            <div className="col-lg-5 white">
              <div className="green_circle">

              </div>
            </div>
          </div>
        </section>

      </div>  
    )
};

export default NavbarTab;