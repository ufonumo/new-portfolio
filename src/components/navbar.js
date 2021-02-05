import React, { useEffect, useState , useRef} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {HashLink as Link} from 'react-router-hash-link'
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
        <Navbar  fixed="top" className={navbar ? 'navbar active ' : 'navbar '}  expand="lg">
          <Navbar.Brand > <Link to='/'  className="nav-link "> <img src={logo} />Umo</Link>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link > <Link smooth  to="#home" className={navbar ? 'nav-link link active ' : 'nav-link link '} >Home</Link> </Nav.Link>
                  <Nav.Link > <Link smooth to="#about" className={navbar ? 'nav-link link active ' : 'nav-link link '} >About Me</Link> </Nav.Link>
                  <Nav.Link > <Link smooth to="#projects" className={navbar ? 'nav-link link active ' : 'nav-link link '} >Projects</Link> </Nav.Link>
                  <Nav.Link > <Link smooth to="#UpdateOnstocks" id='contact' className={navbar ? 'nav-link link active ' : 'nav-link link '} >Say Hello</Link> </Nav.Link>
               </Nav>
              
          </Navbar.Collapse>
        </Navbar>

        <Home/>
        <About />
        <Projects/>


      </div>  
    )
};

export default NavbarTab;