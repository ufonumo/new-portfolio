import React from 'react'
import group from '../assets/Group.svg';
import resume from '../assets/umo.pdf';

export default function Footer() {
    return (
        <div className=' footer mt-5 mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6  pt-4">
                        <div className="in_touch">
                         <h4 className='p-3'>Get in touch, If you would like to collaborate</h4>
                         <a href={resume} download={resume}><button className='btn m-3 '>Download CV</button></a> 

                        </div>
                    </div>
                    <div className="col-lg-6 pt-4">
                        <div className='p-3 socials'>
                            <sub>Email</sub>
                            <p > <a className='ml-1 pt-1' href="mailto:ufonumo@gmail.com "> ufonumo@gmail.com <img src={group} alt="link"/></a> </p>
                        </div>
                        <div className='pr-3 pl-3 social_link'>
                            <sub >Socials</sub>
                            <div className="socials pt-1">
                                <a  href="https://twitter.com/Ufonumo1"> Twitter</a>
                                <a href="https://github.com/ufonumo"> Github</a>
                                <a href="https://www.facebook.com/ufon.umo"> Facebook</a>
                                <a href="https://www.linkedin.com/in/ufonabasi-umo-879271160/"> LinkedIn</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
