import React from 'react'
import thees from "../assets/thess.jpg";
import vendor from "../assets/vendor.jpg";
import weaner from "../assets/healthy.jpg";
import wildfire from "../assets/wildfire.jpg";
import convert from "../assets/convert.jpg";
import group from '../assets/Group.svg';
import convertvideo from "../assets/convertvid.mp4";
import weanervideo from "../assets/healthy.mp4";
import video from "../assets/stockapp.mp4";
import oatsvid from "../assets/oatsvilles.mp4";
import oatsville from "../assets/oatsvile.jpg";
import vendorvideo from "../assets/vendor.mp4";
import HoverVideoPlayer from 'react-hover-video-player';

export default function Projects() {

    const projectData =  [
        {
            title: `Thee's news App `,
            image: thees,
            alt: 'Food',
            video: video,
            description: `This is a webapp where you can get updates about international news, search for stocks based on their symbols and lots more`,
            code:  `React ,  CSS ,  Javascript`,
            link: 'https://thees-news-app.netlify.app/'
        },

        {
            title: `Wildfire Tracker `,
            image: wildfire,
            alt: 'Food',
            // video: profilevideo,
            description: `This is a wildfire tracker, where you can track all the countries that are prone to wildfires in the world. It is powered by NASA's API`,
            link: 'https://ufon-wildfire-tracker.netlify.app/',
            code: `React ,  CSS ,  Javascript`,

        },
    
        {
            title: `BD-FoodVendor `,
            image: vendor,
            alt: 'Food',
            video: vendorvideo,
            code: `HTML ,  CSS , Bootstrap, Javascript `,
            description: 'Discover vendors that sell the food your heart craves. Place an order. Get served on arrival. Eat In, Take away, or Home / Office delivery options available.',
            link: 'https://food.bookdown.ng/vendor-app/signin.html'
    
        },
        
        {
            title: `Degree Converter `,
            image: convert,
            alt: 'Food',
            video: convertvideo,
            code: `React ,  CSS ,  Javascript`,
            description: `Latitude and Longitude coordinates are often presented in degrees, minutes, and seconds. So i decided to build a degree converter to help convert it to decimal degree.`,
            link: 'https://degree-minutes-converter.netlify.app/'
    
        },
    
        {
            title: `Healthy Switcher`,
            image: weaner,
            video: weanervideo,
            alt: 'Food',
            code: `HTML ,  CSS , Bootstrap`,
            description: 'This is the landing page of a food restrautant website',
            link: 'https://healthy-switcher-app-ufon.netlify.app/'
    
        },
    
        
        {
            title: `OatsVille`,
            image: oatsville,
            video: oatsvid,
            alt: 'Food',
            code: `HTML ,  CSS , Bootstrap, Javascript `,
            description: 'This is a website for different types of oatmeal products and different ways of preparing it to make it edible',
            link: 'https://weather-ufon.netlify.app/'
    
        },
    ]

    return (
        <div id="projects" >
            <section >
                <div className="row">
                    <div className="col-lg-5 col-sm-12">
                      <h4  className='colored_text ml-auto pb-5'>FEATURED PROJECTS</h4>

                    </div>
                    <div className="col-lg-7 project mb-4">

                    {projectData.map(list =>  (
                        <div className='mb-4' key={list.title}>
                            <HoverVideoPlayer
                                videoSrc={list.video} className='video_player'
                                pausedOverlay={
                                    <img src={list.image} alt="video thumbnail" />
                                }
                                loadingOverlay={
                                    <div className="loading-spinner-overlay" />
                                }
                            />

                            <div className="project_container">
                                <a href={list.link}>
                                    <div className='group_icon pt-4'>
                                        <h6>{list.title}</h6>
                                        <img src={group} alt={list.alt}/>
                                    </div>
                                </a>
                                <p>{list.description}</p>
                                <div className='list_codes'>
                                    <li>React</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                    <li>Css</li>

                                </div>
                            </div>
                        </div>
                    ))}
                    </div>

                   
                </div>
            </section>
        </div>
    )
}
