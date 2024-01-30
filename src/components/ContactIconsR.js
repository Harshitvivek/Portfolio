import React from 'react';
import Icon from './icons'
import './ContactIconsR.css';
import facebookLogo from "./Img/facebook.png";
import instaLogo from './Img/instagram.png';
import twitterLogo from './Img/twitter.png';
import linkedinLogo from './Img/linkedin.png';




function iconsR() {
    return(
        <div className='iconsR'>
            <a className='iconLink' href="https://www.facebook.com/harshit.yadav.56679015?mibextid=ZbWKwL" target='_blank' rel="noreferrer">
            <Icon img={facebookLogo} /> 
            </a>
            <a className='iconLink'  href='https://instagram.com/harshit_vivek?igshid=MzRlODBiNWFlZA==' target='_blank' rel="noreferrer">
            <Icon img={instaLogo} />
            </a>
            <a className='iconLink'  href='https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react'>
            <Icon img={linkedinLogo} />
            </a>
            <a className='iconLink' href='https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react'>
            <Icon img={twitterLogo} />
            </a>
        </div>
    );
}
export default iconsR