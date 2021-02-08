import React from 'react'
import group from '../assets/Group.svg';
import biglogo from '../assets/big Logo.svg';

export default function Footer() {
    return (
        <div className=' footer mt-5 mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6  pt-4">
                        <div className="in_touch">
                         <h4 className='p-3'>Get in touch, If you would like to collaborate</h4>

                        </div>
                        {/* <img src={biglogo} alt=""/> */}
                    </div>
                    <div className="col-lg-6 pt-4">
                        <div className='p-3'>
                            <sub>Email</sub>
                            <p > <a href="mailto:ufonumo@gmail.com "> ufonumo@gmail.com <img src={group} alt="link"/></a> </p>
                        </div>
                        <div className='pr-3 pl-3'>
                            <sub>Socials</sub>
                            <div className="socials">
                                <a href="https://twitter.com/Ufonumo1"> Twitter</a>
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
