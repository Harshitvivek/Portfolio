import React from 'react';
import '../Card.css';
import Langcard from './langCard';



function card(props){
    return(
        <div className='card'>
            
            <div className='content'>
           
                <div className='front'>
                    <h1 className='topic'>{props.heading}</h1>
                </div>
           
            
                <div className='back'>
                
                    <Langcard/>
                    

                </div>
            
            </div>
        </div>
    )
}
export default card;