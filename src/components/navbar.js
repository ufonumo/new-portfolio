import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { HashLink as Link } from 'react-router-hash-link';
import logo from "../assets/Logo.svg";
import menu from "../assets/menu.svg";

import Home from './Home';
import About from './About';
import Projects from "./Projects";
import Footer from './Footer';
import vector from "../assets/Vector.svg";

const NavbarTab = () =>{
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () =>{
    if(window.scrollY >= 100){
      setNavbar(true)
    }
    else{
      setNavbar(false);
    }
  };


  window.addEventListener('scroll', () =>{
    changeBackground()
  })

 
    return(
      <div className='container'>
        <Navbar  fixed="top" className={navbar ? 'navbar active ' : 'navbar '}  expand="lg">
          <Navbar.Brand > <Link to='/'  className="nav-link "> <img src={logo} />Umo</Link>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">   <img src={menu} />    </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav"> 
                <Nav className="ml-auto text-center">
                  <Nav.Link > <Link smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -100);  }} to="#home" className={navbar ? 'nav-link link active ' : 'nav-link link '} >Home</Link> </Nav.Link>
                  <Nav.Link > <Link smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -100);  }} to="#about" className={navbar ? 'nav-link link active ' : 'nav-link link '} >About Me</Link> </Nav.Link>
                  <Nav.Link > <Link smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -100);  }} scrollOffset="1000" to="#projects" className={navbar ? 'nav-link link active ' : 'nav-link link '} >Projects</Link> </Nav.Link>
                  <Nav.Link href="mailto:ufonumo@gmail.com " > <a id='contact' className={navbar ? 'nav-link link active ' : 'nav-link link '} >Say Hello</a> </Nav.Link>
               </Nav>
              
             </Navbar.Collapse>
        </Navbar>

        <Home/>
        <About />
        <Projects/>
        <Footer/>

        <section>
          <div className="copyright">
            <p>All rights reserved. Made with <img src={vector} alt="love"/> and designed by Mike Ebube</p>
          </div>
        </section>

      </div>  
    )
};

export default NavbarTab;