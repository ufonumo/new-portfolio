import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import logo from "../assets/Logo.svg";
import vector from "../assets/Vector.svg";
import photo from '../assets/Ellipse 1.svg';
import scroll from "../assets/Scroll.svg";

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

        {/* HOME SECTION */}

        <section id='home' className='home'>
          <div className="row ">
            <div className="col-lg-7 white">
              <sub className='sub'>Hi there <img src={vector} alt="love"/></sub>
              <p className='home_intro'>I’m <b>Ufonabasi Umo,</b> Frontend Developer, with a hands-on experience in creating web applications.</p>
              <a href="#"><button className='btn mt-3 mb-5'>View My Projects</button></a> 
            </div>
            <div className="col-lg-5 white mb-4">
              <div className="blue_circle">
                <div className="green_circle ">
                  <img src={photo} alt="photo"/>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center ">
            <img className='bounce' src={scroll} alt="scroll down"/>
          </div>
        </section>

        {/* ABOUT ME SECTION */}

        <section id='about' className='home'> 
          <div className="row">
            <div className="col-lg-4">
                <h4 className='colored_text'>ABOUT ME</h4>
            </div>
            <div className="col-lg-8">
              <article>
                I enjoy being <b>challenged</b>  and engaged with projects that requires me to work outside my comfort and knowledge set,
               as continuing to learn new languages and development techniques are important to me.
              </article>
              <article className='pt-4'>
                I am outgoing, <b>dedicated</b> , and open-minded. I get across to 
                people and adjust to changes with ease. I believe  that a person should work
                on <b>developing</b>  their professional skills and learning new things all the time. Meeting new people who support all my efforts to <b>grow</b>  and develop my skills not 
                only in the subjects but also in my hobbies gives me a lot of <b>energy</b> .
              </article>
            </div>
          </div>
        </section>

        {/* SKILLS */}

        <section id='skills' className='pt-5'>
          <div className="row">
            <div className="col-lg-4">
              <h4 className='colored_text'>SKILLS</h4>
            </div>
            <div className="col-lg-8">
              <p>Javascript ES6, React, Next.js,  CSS3, SCSS, HTML5, BEM, Git, Webpack,  </p>
            </div>
          </div>
        </section>



      </div>  
    )
};

export default NavbarTab;