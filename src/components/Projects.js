import React from 'react'
import thees from "../assets/thess.jpg";
import vendor from "../assets/vendor.jpg";
import weaner from "../assets/healthy.jpg";
import profile from "../assets/profile.jpg";
import convert from "../assets/convert.jpg";
import weather from "../assets/weather.jpg";
import group from '../assets/Group.svg';
import profilevideo from "../assets/profilevid.mp4";
import convertvideo from "../assets/convertvid.mp4";
import weanervideo from "../assets/healthy.mp4";
import weathervideo from "../assets/weathervid.mp4";
import video from "../assets/stockapp.mp4";
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
            code: `REACT ,  CSS ,  JAVASCRIPT`,
            link: 'https://thees-news-app.netlify.app/'
        },

        {
            title: `Profile Search `,
            image: profile,
            alt: 'Food',
            video: profilevideo,
            description: 'This is profile search where you can conduct different filters to search and categorize users based on gender, payment methods etc',
            link: 'https://profile-search-ufon.netlify.app/',
            code: `REACT ,  CSS ,  JAVASCRIPT`,

        },
    
        {
            title: `BD-FoodVendor `,
            image: vendor,
            alt: 'Food',
            video: vendorvideo,
            code: `HTML ,  CSS , BOOTSTRAP, JAVASCRIPT `,
            description: 'Discover vendors that sell the food your heart craves. Place an order. Get served on arrival. Eat In, Take away, or Home / Office delivery options available.',
            link: 'https://food.bookdown.ng/vendor-app/signin.html'
    
        },
        
        {
            title: `Degree Converter `,
            image: convert,
            alt: 'Food',
            video: convertvideo,
            code: `REACT ,  CSS ,  JAVASCRIPT`,
            description: `Latitude and Longitude coordinates are often presented in degrees, minutes, and seconds. So i decided to build a degree converter to help convert it to decimal degree.`,
            link: 'https://degree-minutes-converter.netlify.app/'
    
        },
    
        {
            title: `Healthy Switcher`,
            image: weaner,
            video: weanervideo,
            alt: 'Food',
            code: `HTML ,  CSS , BOOTSTRAP`,
            description: 'This is the landing page of a food restrautant website',
            link: 'https://healthy-switcher-app-ufon.netlify.app/'
    
        },
    
        
        {
            title: `Weather Webapp`,
            image: weather,
            video: weathervideo,
            alt: 'Food',
            code: `HTML ,  CSS , BOOTSTRAP, JAVASCRIPT `,
            description: 'This is a weather webapp used to search for weather information for any location around the globe.',
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
