import React from 'react';
import './home.css';
import Typed from 'react-typed';
import { Fade, Flip, Slide } from 'react-awesome-reveal';





function home(){
    return(
        <div className='home'>

            
                <div>
                    
                    <Fade delay={300} duration={2000} collapse={true}>
                        <h3 >Hi, my name is</h3>
                    </Fade>
                    
                    
                    <Fade delay={500} duration={2000} collapse={true}>
                        <h1 className='name'>Harshit Anand</h1>
                    </Fade>
                    
                    <Fade delay={700} duration={2000} collapse={true}>
                        <Typed
                         className='coder'
                         strings={['I am a Coder / Web Developer.']}
                         delay={3000}
                         typeSpeed={50}
                         backSpeed={30}
                         loop
                        />
                    </Fade>
                    
                    {/* <h1 className='coder'>I am a Coder <span className='coderSpan'>/</span> Web Developer</h1> */}
               
                </div>
               
                
                <div className='homePara'>
                <Fade cascade={true} delay={900} duration={2000} collapse={true}>
                <p>I am persuing my Btech degree from Galgotias University.
                For my acadmic reference I am familier with languages like C and C++ 
                I am also compeleting and practicing web development and completed a few projects of my own.
                In web development i am familier with React</p>
                </Fade>
                </div>
                <Fade delay={1100} duration={1500} collapse={true}>
                <Slide direction="up" delay={1100} duration={2000} collapse={true} fraction={0}>
                    <button className='resumeBtn'>RESUME</button>
                </Slide> 
                </Fade>
            {/* <span className='user-name'><h1> Harshit</h1></span> */}
        </div>
    )
}
export default home