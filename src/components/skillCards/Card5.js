import React from 'react';
import '../Card.css';
import PlateformCard from './PlateformCard'



function card5(props){
    return(
        <div className='card'>
            
            <div className='content'>
           
                <div className='front'>
                    <h1 className='topic'>{props.heading}</h1>
                </div>
           
            
                <div className='back'>
                
                    <PlateformCard/>
                    

                </div>
            
            </div>
        </div>
    )
}
export default card5;