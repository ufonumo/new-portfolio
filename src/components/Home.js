import React from 'react';
import vector from "../assets/Vector.svg";
import photo from '../assets/Ellipse 1.svg';
import scroll from "../assets/Scroll.svg";

export default function Home() {
    return (
        <div>
            <section  className='home'>
                <div className="row " >
                    <div className="col-lg-7 white">
                    <sub className='sub' id='home'>Hi there <img src={vector} alt="love"/></sub>
                    <p className='home_intro'>I’m <b>Ufonabasi Umo,</b> Frontend Developer, with a hands-on experience in creating web applications.</p>
                    <a href="#"><button className='btn mt-3 mb-5'>View My Projects</button></a> 
                    </div>
                    <div className="col-lg-5 white mb-4">
                    <div className="blue_circle">
                        <div className="green_circle ">
                        <img src={photo} alt="my photo"/>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="text-center ">
                    <img className='bounce' src={scroll} alt="scroll down"/>
                </div>
            </section>
        </div>
    )
}
