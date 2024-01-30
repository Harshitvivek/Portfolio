import React from 'react';
import Icon from './icons'  
import './IconsBottom.css';
import facebookLogo from "./Img/facebook.png";
import instaLogo from './Img/instagram.png';
import twitterLogo from './Img/twitter.png';
import linkedinLogo from './Img/linkedin.png';




function iconsBottom() {
    return(
        <div className='iconsB'>
            <Icon img={facebookLogo} /> 
            <Icon img={instaLogo} />
            <Icon img={linkedinLogo} />
            <Icon img={twitterLogo} />
        </div>
        
    );
}
export default iconsBottom