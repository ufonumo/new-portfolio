import thees from "../assets/thess.jpg";
import video from "../assets/stockapp.mp4";
import couture from "../assets/couture.png";
import lavendrrcouture from "../assets/lavendrr.mp4";
import ify from "../assets/ify.png";
import vmc from "../assets/vmc.png";
import ekicc from "../assets/ekicc.png";

const projectData = [
    {
        title: `Ify's Kitchen`,
        image: ify,
        description: `This is a website for Ify's Kitchen, We offer you premium content that brings all the good food recipes and put them in one place. It was built using typescript and styled with sass`,
        alt: "food application",
        code: [{ list: "Typescript" }, { list: "Socket.io" }, { list: "Redux" }, { list: "Sass" }],
        link: "https://staging.ifyskitchen.com/",
    },
    {
        title: `Vmc Telemedicine `,
        image: vmc,
        description: `Our vision is to put accessible and affordable health services in the hands of every person in Nigeria.
        Book a consultation today with a healthcare professional at any time of day or night. We’ll recommend the best clinician for you to speak to. It was built using typescript and styled with sass`,
        alt: "telemedicine application",
        code: [
            { list: "Typescript" },
            { list: "Twillio" },
            { list: "Redux" },
            { list: "Sass" },
            { list: "React" },
        ],
        link: "https://www.vmcnigeria.com/",
    },
    {
        title: `e-KICC`,
        image: ekicc,
        description: `The e-KICC is an online platform by KICC to connect people across the globe to worship God as a community. It was built using typescript and styled with tailwind css`,
        alt: "e-KICC application",
        code: [
            { list: "React" },
            { list: "Typescript" },
            { list: "React query" },
            { list: "Tailwind css" },
        ],
        link: "https://ekicc.global/",
    },
    {
        title: `Lavendrr couture `,
        image: couture,
        alt: "e-commerce",
        video: lavendrrcouture,
        description: `This is an e-commerce website called lavendrr. i built it using react (functional components) and commerce.js as the backend for the products, adding to carts, checkouts and all other processes. And made use of Stripe as the dummy payment getway.`,
        code: [
            { list: "React" },
            { list: "Javascript" },
            { list: "Commercejs" },
            { list: "Material-ui" },
        ],
        link: "https://lavendrr.netlify.app/",
    },
    {
        title: `Thee's news App `,
        image: thees,
        alt: "Food",
        video: video,
        description: `This is a webapp where you can get updates about international news, search for stocks based on their symbols and lots more`,
        code: [
            { list: "React" },
            { list: "Javascript" },
            { list: "React chartjs" },
            { list: "Boostrap" },
        ],
        link: "https://thees-news-app.netlify.app/",
    },

    // {
    //     title: `Wildfire Tracker `,
    //     image: wildfire,
    //     alt: "Food",
    //     // video: profilevideo,
    //     description: `This is a wildfire tracker web application, where you can track all the countries that are prone to wildfires in the world. It is powered by NASA's API`,
    //     link: "https://ufon-wildfire-tracker.netlify.app/",
    //     code: [{ list: "React" }, { list: "Javascript" }, { list: "NASA Api" }, { list: "Css" }],
    // },

    // {
    //     title: `BD-FoodVendor `,
    //     image: vendor,
    //     alt: "Food",
    //     video: vendorvideo,
    //     code: [{ list: "React" }, { list: "Javascript" }, { list: "Bootstrap" }, { list: "Axios" }],
    //     // code: `HTML ,  CSS , Bootstrap, Javascript `,
    //     description:
    //         "Discover vendors that sell the food your heart craves. Place an order. Get served on arrival. Eat In, Take away, or Home / Office delivery options available.",
    //     link: "https://food.bookdown.ng/vendor-app/signin.html",
    // },

    // {
    //     title: `Degree Converter `,
    //     image: convert,
    //     alt: "Food",
    //     video: convertvideo,
    //     // code: `React ,  CSS ,  Javascript`,
    //     code: [{ list: "React" }, { list: "Javascript" }, { list: "Bootstrap" }],
    //     description: `Latitude and Longitude coordinates are often presented in degrees, minutes, and seconds. So i decided to build a degree converter to help convert it to decimal degree.`,
    //     link: "https://degree-minutes-converter.netlify.app/",
    // },

    // {
    //     title: `Healthy Switcher`,
    //     image: weaner,
    //     video: weanervideo,
    //     alt: 'Food',
    //     // code: `HTML ,  CSS , Bootstrap`,
    //     code: [
    //         {'list': 'Html'},
    //         {'list': 'Css'},
    //         {'list': 'Boostrap'},
    //     ],
    //     description: 'This is the landing page of a food restrautant website',
    //     link: 'https://healthy-switcher-app-ufon.netlify.app/'

    // },

    // {
    //     title: `OatsVille`,
    //     image: oatsville,
    //     video: oatsvid,
    //     alt: "Food",
    //     code: [{ list: "Html" }, { list: "Css" }, { list: "Javascript" }, { list: "Bootstrap" }],
    //     description:
    //         "This is a website for different types of oatmeal products and different ways of preparing it to make it edible",
    //     link: "https://weather-ufon.netlify.app/",
    // },
];

export default projectData;
