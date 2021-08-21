import thees from "../assets/thess.jpg";
import vendor from "../assets/vendor.jpg";
import weaner from "../assets/healthy.jpg";
import wildfire from "../assets/wildfire.jpg";
import convert from "../assets/convert.jpg";
import convertvideo from "../assets/convertvid.mp4";
import weanervideo from "../assets/healthy.mp4";
import video from "../assets/stockapp.mp4";
import oatsvid from "../assets/oatsvilles.mp4";
import oatsville from "../assets/oatsvile.jpg";
import couture from "../assets/couture.png";
import vendorvideo from "../assets/vendor.mp4";
import lavendrrcouture from "../assets/lavendrr.mp4";

const projectData =  [

    {
        title: `Lavendrr couture `,
        image: couture,
        alt: 'e-commerce',
        video: lavendrrcouture,
        description: `This is an e-commerce website called lavendrr. i built it using react (functional components) and commerce.js as the backend for the products, adding to carts, checkouts and all other processes. And made use of Stripe as the dummy payment getway.`,
        code: [
            {'list': 'React'},
            {'list': 'Javascript'},
            {'list': 'Commercejs'},
            {'list': 'Material-ui'}
        ],
        link: 'https://lavendrr.netlify.app/'
    },

    {
        title: `Thee's news App `,
        image: thees,
        alt: 'Food',
        video: video,
        description: `This is a webapp where you can get updates about international news, search for stocks based on their symbols and lots more`,
        code: [
            {'list': 'React'},
            {'list': 'Javascript'},
            {'list': 'React chartjs'},
            {'list': 'Boostrap'}
        ],
        link: 'https://thees-news-app.netlify.app/'
    },

    {
        title: `Wildfire Tracker `,
        image: wildfire,
        alt: 'Food',
        // video: profilevideo,
        description: `This is a wildfire tracker web application, where you can track all the countries that are prone to wildfires in the world. It is powered by NASA's API`,
        link: 'https://ufon-wildfire-tracker.netlify.app/',
        code: [
            {'list': 'React'},
            {'list': 'Javascript'},
            {'list': 'NASA Api'},
            {'list': 'Css'}
        ],

    },

    {
        title: `BD-FoodVendor `,
        image: vendor,
        alt: 'Food',
        video: vendorvideo,
        code: [
            {'list': 'React'},
            {'list': 'Javascript'},
            {'list': 'Bootstrap'},
            {'list': 'Axios'}
        ],
        // code: `HTML ,  CSS , Bootstrap, Javascript `,
        description: 'Discover vendors that sell the food your heart craves. Place an order. Get served on arrival. Eat In, Take away, or Home / Office delivery options available.',
        link: 'https://food.bookdown.ng/vendor-app/signin.html'

    },
    
    {
        title: `Degree Converter `,
        image: convert,
        alt: 'Food',
        video: convertvideo,
        // code: `React ,  CSS ,  Javascript`,
        code: [
            {'list': 'React'},
            {'list': 'Javascript'},
            {'list': 'Bootstrap'}
        ],
        description: `Latitude and Longitude coordinates are often presented in degrees, minutes, and seconds. So i decided to build a degree converter to help convert it to decimal degree.`,
        link: 'https://degree-minutes-converter.netlify.app/'

    },

    {
        title: `Healthy Switcher`,
        image: weaner,
        video: weanervideo,
        alt: 'Food',
        // code: `HTML ,  CSS , Bootstrap`,
        code: [
            {'list': 'Html'},
            {'list': 'Css'},
            {'list': 'Boostrap'},
        ],
        description: 'This is the landing page of a food restrautant website',
        link: 'https://healthy-switcher-app-ufon.netlify.app/'

    },

    
    {
        title: `OatsVille`,
        image: oatsville,
        video: oatsvid,
        alt: 'Food',
        code: [
            {'list': 'Html'},
            {'list': 'Css'},
            {'list': 'Javascript'},
            {'list': 'Bootstrap'}
        ],
        description: 'This is a website for different types of oatmeal products and different ways of preparing it to make it edible',
        link: 'https://weather-ufon.netlify.app/'

    },
]

export default projectData;