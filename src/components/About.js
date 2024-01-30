import React from 'react';
import './About.css';
import profilePic from './Img/profile.jpeg';
import { Fade, Slide } from 'react-awesome-reveal';
import { useState } from 'react';

function About(){

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (visible) => {
      setIsVisible(visible);
    }
    return(
        <div className='about'>
            
             <Fade delay={200} duration={2000}  fraction={0}  onVisibilityChange={handleVisibilityChange} easing="ease-in-out" triggerOnce>
                <Slide direction='up' delay={200} duration={1500} fraction={0}  onVisibilityChange={handleVisibilityChange} easing="ease-in-out" triggerOnce>
                {isVisible && <p className='aboutP'> <span className='aboutSpan'> Hii, I am Harshit Anand.</span> I am currently persuing my BTech graduation from Galgotias Univerity.
                I have completed my 10th and 12th from Gyan Niketan, Patna. I am aspiring web developer and have a hobby of 
                learning new technologies. I have completed Web Development front-end course and also working on some projects of my own.
                I have a strong command on java script library <span className='aboutS'>"React"</span> and also have completed some projects using react.
                For back-end I have completed the course of <span className='aboutS'>MY SQL</span> and currently learning <span className='aboutS'> Node js</span> and <span className='aboutS'>Mongo DB</span>.
                I have keen intrest in <span className='aboutS'>videography</span> and <span className='aboutS'>videoediting</span>, making <span className='aboutS'>cinematic shots</span>.
            </p>}
            </Slide>
            </Fade>
            
            
            <Fade className='aboutI' direction='down' delay={200} duration={2000} easing="ease-in-out"  triggerOnce>
            {isVisible &&
                <img className='aboutI' src={profilePic} />
}
             </Fade>   
                
            
        </div>
    )
}
export default About;