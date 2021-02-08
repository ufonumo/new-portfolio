import React from 'react'
import thees from "../assets/thess.jpg";
import vendor from "../assets/vendor.jpg";
import weaner from "../assets/weaners.jpg";
import profile from "../assets/profile.jpg";
import convert from "../assets/convert.jpg";
import weather from "../assets/weather.jpg";
import group from '../assets/Group.svg';
import profilevideo from "../assets/profilevid.mp4";
import convertvideo from "../assets/convertvid.mp4";
import weanervideo from "../assets/weanervid.mp4";
import weathervideo from "../assets/weathervid.mp4";
import video from "../assets/stockapp.mp4";
import HoverVideoPlayer from 'react-hover-video-player';

export default function Projects() {

    const projectData =  [
        {
            title: `Thee's news App `,
            image: thees,
            alt: 'Food',
            video: video,
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            code: `REACT ,  CSS ,  JAVASCRIPT`,
            link: 'https://thees-news-app.netlify.app/'
        },

        {
            title: `Profile Search `,
            image: profile,
            alt: 'Food',
            video: profilevideo,
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            link: 'https://profile-search-ufon.netlify.app/',
            code: `REACT ,  CSS ,  JAVASCRIPT`,

        },
    
        {
            title: `BD-FoodVendor `,
            image: vendor,
            alt: 'Food',
            video: convertvideo,
            code: `HTML ,  CSS , BOOTSTRAP, JAVASCRIPT `,
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            link: 'https://food.bookdown.ng/vendor-app/signin.html'
    
        },
        
        {
            title: `Degree Converter `,
            image: convert,
            alt: 'Food',
            video: convertvideo,
            code: `REACT ,  CSS ,  JAVASCRIPT`,
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            link: 'https://degree-minutes-converter.netlify.app/'
    
        },
    
        {
            title: `Weaner's`,
            image: weaner,
            video: weanervideo,
            alt: 'Food',
            code: `REACT ,  CSS ,  JAVASCRIPT`,
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            link: 'https://gallant-hamilton-d2b950.netlify.app/'
    
        },
    
        
        {
            title: `Weather Webapp`,
            image: weather,
            video: weathervideo,
            alt: 'Food',
            code: `HTML ,  CSS , BOOTSTRAP, JAVASCRIPT `,
            description: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Quo, recusandae? Laborum accusantium dol',
            link: 'https://weather-ufon.netlify.app/'
    
        },
    ]

    return (
        <div >
            <section id="projects">
                <h4  className='colored_text pb-5'>FEATURED PROJECTS</h4>

                <div className="row">
                    {projectData.map(list => (
                        
                        <div className="col-lg-6 project mb-4">
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
                                <div className='list_codes'>{list.code}</div>
                            </div>
                       </div>
                    ))}
                   
                </div>
            </section>
        </div>
    )
}
