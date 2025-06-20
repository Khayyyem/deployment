import { meta, shopify, starbucks, tesla, esu} from "../assets/images";
import {
    java,
    Keras,
    Tensorflow,
    python,
    car,
    contact,
    css,
    cpp,
    estate,
   // express,
    git,
    github,
    html,
    javascript,
    linkedin,
   // mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    gemini
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: Tensorflow,
        name: "Tensorflow",
        type: "Backend",
    },
    {
        imageUrl: Keras,
        name: "Keras",
        type: "Backend",
    },
    /*{
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },*/
    {
        imageUrl: cpp,
        name: 'CPP',
        type: 'Backend'
    },
    {
        imageUrl: java,
        name: 'java',
        type: 'Backend'
    },
   
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    /*{
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },*/
    /*  {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },*/
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    /*{
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },*/
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
  /*  {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }*/
        {
            imageUrl: git,
            name: "Git",
            type: "Version Control",
        },
        
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
 /*  {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
        {
            imageUrl: html,
            name: "HTML",
            type: "Frontend",
        },*/
];


export const experiences = [
  /*  {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },*/
    {
        title: "Course Assistant - Operating Systems",
        company_name: "East Stroudsburg University of Pennsylvania",
        icon: esu,
        iconBg: '#fbc3bc', //"#a2d2ff",
        date: "Jan 2025 - May 2025",
        points: [
            'Mentored students in CPSC 340 (Operating Systems) through weekly office hours and hands-on kernel development projects, directly improving their ability to implement complex OS components including process schedulers and memory management systems',
            'Translated advanced OS concepts (multithreading, synchronization, file systems) into practical code, improving project completion rates and kernel performance metrics',

        ],
    },
    {
        title: "Research Assistant Intern",
        company_name: "East Stroudsburg University of Pennsylvania",
        icon: esu,
        iconBg: '#fbc3bc', //"#a2d2ff",
        date: "May 2024 - August 2024",
        points: [
            'Built a high-performance CNN model for MRI-based brain tumor detection using Keras, improving accuracy from 71% to 97% through advanced transfer learning and fine-tuning optimization',
            'Implemented advanced techniques including convolutional layers, dropout, and data augmentation to enhance model robustness and prevent overfitting',
            'Demonstrated the models effectiveness in medical diagnostics, delivering high performance and reliable results in distinguishing tumor from non-tumor images',

        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Khayyyem',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/khayyam-shaikh-36517a209/',
    }
];

export const projects = [
  /*  {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },*/
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Customer Churn Prediction Model',
        description: 'Customer churn analysis on 10,000 records, identifying a 20.37% churn rate and building a model using multiple input variables to predict future customer departures.',
        link: 'https://github.com/Khayyyem/Customer-Churn',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Brain Cancer Detector',
        description: 'Developed a deep learning model to classify MRI images as either containing a brain tumor or being tumor-free.',
        link: 'https://github.com/Khayyyem/Deep-Learning-Cancer-Detection-',
    },
    {
        iconUrl: gemini,
        theme: 'btn-back-black',
        name: 'Google Gemini Clone',
        description: 'An AI-powered application designed as a clone of Google Gemini, automatically transforming lengthy articles and blog posts into concise, informative summaries.',
        link: 'https://github.com/Khayyyem/Gemini-Clone',
    }
];
