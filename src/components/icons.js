import React from "react";
import './icons.css';
// import RubberBand from 'react-reveal/RubberBand';


function icon(props) {
    return(
        // <RubberBand duration={1500} delay={2000} count={2} forever={true}>
        <img className="iconImg" src={props.img} alt="error" />
        // </RubberBand>
    );
    }
    
export default icon;