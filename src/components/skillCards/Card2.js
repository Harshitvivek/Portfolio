import React from 'react';
import '../Card.css';
import FrameworkCard from './FrameworkCard';



function card2(props){
    return(
        <div className='card'>
            
            <div className='content'>
           
                <div className='front'>
                    <h1 className='topic'>{props.heading}</h1>
                </div>
           
            
                <div className='back'>
                
                    <FrameworkCard/>
                    

                </div>
            
            </div>
        </div>
    )
}
export default card2;