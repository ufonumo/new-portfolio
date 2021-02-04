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
  const aboutSection = useRef(null)

  const changeBackground = () =>{
    if(window.scrollY >= 100){
      setNavbar(true)
    }
    else{
      setNavbar(false);
    }
  }

  const gotoAboutSection = () => window.scrollTo(
    { top: aboutSection.current.offsetTop,
      behaviour: "smooth"
    })

  window.addEventListener('scroll', changeBackground)

 
    return(
      <div className='container'>
        <Navbar  fixed="top" className={navbar ? 'navbar active container' : 'navbar container'}  expand="lg">
          <Navbar.Brand > <Link to='/'  className="nav-link "> <img src={logo} />Umo</Link>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link > <Link smooth  to="#home" className="nav-link link">Home</Link> </Nav.Link>
                  <Nav.Link > <Link smooth to="#about" className="nav-link link">About Me</Link> </Nav.Link>
                  <Nav.Link > <Link smooth to="#projects" className="nav-link link">Projects</Link> </Nav.Link>
                  <Nav.Link > <Link smooth to="#UpdateOnstocks" id='contact' className="nav-link link">Say Hello</Link> </Nav.Link>
               </Nav>
              
          </Navbar.Collapse>
        </Navbar>

        {/* HOME SECTION */}

        <Home/>
        <About ref={aboutSection}/>

        {/* ABOUT ME SECTION */}


      </div>  
    )
};

export default NavbarTab;