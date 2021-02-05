import React from 'react'
import thees from "../assets/thess.jpg";
import vendor from "../assets/vendor.jpg";
import weaner from "../assets/weaners.jpg";
import profile from "../assets/profile.jpg";
import convert from "../assets/convert.jpg";
import weather from "../assets/weather.jpg";
import group from '../assets/Group.svg'

export default function Projects() {

    const projectData =  [
        {
            title: `Thee's news App `,
            image: thees,
            alt: 'Food',
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            code: `REACT ,  CSS ,  JAVASCRIPT`,
            link: 'https://thees-news-app.netlify.app/'
        },

        {
            title: `Profile Search `,
            image: profile,
            alt: 'Food',
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            link: 'https://profile-search-ufon.netlify.app/'
    
        },
    
        {
            title: `Bookdown-FoodVendor `,
            image: vendor,
            alt: 'Food',
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            link: 'https://food.bookdown.ng/vendor-app/signin.html'
    
        },
        
        {
            title: `Degree Converter `,
            image: convert,
            alt: 'Food',
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            link: 'https://degree-minutes-converter.netlify.app/'
    
        },
    
        {
            title: `Weaner's`,
            image: weaner,
            alt: 'Food',
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            link: 'https://gallant-hamilton-d2b950.netlify.app/'
    
        },
    
        
        {
            title: `Weather Webapp`,
            image: weather,
            alt: 'Food',
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            link: 'https://weather-ufon.netlify.app/'
    
        },
    ]

    return (
        <div >
            <section >
             <h4 id="projects" className='colored_text'>FEATURED PROJECTS</h4>

                <div className="row">
                    {projectData.map(list => (
                        <div className="col-lg-6 project mb-4">
                            <img src={list.image} alt="project images"/>

                            <div className="project_container">
                                <div className='group_icon pt-4'>
                                    <h6>{list.title}</h6>
                                <a href={list.link}> <img src={group} alt="link"/></a>
                                </div>

                                <p>{list.description}</p>
                                <div>{list.code}</div>
                            </div>
                       </div>
                    ))}
                   
                </div>
            </section>
        </div>
    )
}
