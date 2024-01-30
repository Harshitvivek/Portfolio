import React from 'react';
import Icon from './icons'  
import './contactIcons.css';
import facebookLogo from "./Img/facebook.png";
import instaLogo from './Img/instagram.png';
import twitterLogo from './Img/twitter.png';
import linkedinLogo from './Img/linkedin.png';




function icons() {
    return(
        <div className='icons'>
            <Icon img={facebookLogo} /> 
            <Icon img={instaLogo} />
            <Icon img={linkedinLogo} />
            <Icon img={twitterLogo} />
        </div>
        
    );
}
export default icons