import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText}) => (
    <div  className = "info-box">
       <p className='font-medium sm:text-xl text-center'>{text}</p>
       <Link to ={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
       </Link>
    </div>
)



const renderContent = {
    1: (
        <h1></h1>
    ),
    2: (
        <InfoBox
        text="Looking for a Software Developer? Feel Free to Contact Me! (Also, I Hope You Liked My Portfolio Website:)"
        link="/contact"
        btnText="Contact me"
        />
    ),
    3: (
        <InfoBox
        text="I am a Junior in college. I recently Interned at my University over the Summer while
        also working on a few Personal Projects"
        link="/projects"
        btnText="Visit Portfolio"
        />
    ),
    4: (
        
      /*  <h1 className = "sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className='font-semibold'> Khayyam</span>
        <br/>
        A Software Engineering Student based in the East Coast.</h1>
        //<InfoBox
       // text=""
       // link="/about"
       // btnText="More about me"
       // />
      */ <InfoBox
       text  ="Hi, I’m Khayyam, a Software Engineering student with hands-on experience in developing machine learning models and solving complex problems"
       link="/about"
       btnText="More about me"
       />
        
    ),
}


const HomeInfo = ({ currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo