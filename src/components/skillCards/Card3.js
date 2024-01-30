import React from 'react';
import '../Card.css';
import DatabaseCard from './DatabaseCard';



function card3(props){
    return(
        <div className='card'>
            
            <div className='content'>
           
                <div className='front'>
                    <h1 className='topic'>{props.heading}</h1>
                </div>
           
            
                <div className='back'>
                
                    <DatabaseCard/>
                    

                </div>
            
            </div>
        </div>
    )
}
export default card3;