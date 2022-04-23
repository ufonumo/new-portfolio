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
import Particles from "react-particles-js";

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
      <div>
      <Particles

        params={{
          particles: {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "line_linked": {
                "enable": true,
                "opacity": 0.02
            },
            "move": {
                "direction": "right",
                "speed": 0.5
            },
            "size": {
                "value": 1
            },
            "opacity": {
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.5
                }
            }
        },
          interactivity: {
              "events": {
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  }
              },
              "modes": {
                  "push": {
                      "particles_nb": 1
                  }
              }
          },
          "retina_detect": true
        }}

      />
        <div className='container'>
          <Navbar  fixed="top" className={navbar ? 'navbar active ' : 'navbar'}  expand="lg">
            <div className="container">
              <Navbar.Brand > <Link to='/'  className="nav-link " id='name'> <img src={logo} alt='Umo' />Umo</Link>  </Navbar.Brand>
                <Navbar.Toggle >   <img src={menu} alt='menu icon' className='navbar-toggler collapsed' aria-controls="basic-navbar-nav" />    </Navbar.Toggle>
                  <Navbar.Collapse id="basic-navbar-nav"> 
                      <Nav className="ml-auto text-center">
                        <Nav.Link > <Link smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -100);  }} to="#home" className={navbar ? 'nav-link link active ' : 'nav-link link '} >Home</Link> </Nav.Link>
                        <Nav.Link > <Link smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -100);  }} to="#about" className={navbar ? 'nav-link link active ' : 'nav-link link '} >About Me</Link> </Nav.Link>
                        <Nav.Link > <Link smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -100);  }} scrolloffset="1000" to="#projects" className={navbar ? 'nav-link link active ' : 'nav-link link '} >Projects</Link> </Nav.Link>
                        <Nav.Link href="mailto:ufonumo@gmail.com " > <a href='mailto:ufonumo@gmail.com' id='contact' className={navbar ? 'nav-link link active ' : 'nav-link link '} >Say Hello</a> </Nav.Link>
                    </Nav>
                  
                </Navbar.Collapse>
              </div>
            
          </Navbar>

          <Home/>
          <About />
          <Projects/>
          <Footer/>

          <section>
            <div className="copyright text-center">
              <p>All rights reserved. Made with <img src={vector} alt="love"/> and designed by Mike Ebube</p>
            </div>
          </section>

        </div>  
      </div>

    )
};

export default NavbarTab;