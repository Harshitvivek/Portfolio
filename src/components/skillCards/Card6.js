import React from 'react';
import '../Card.css';
import OthersCard from './OthersCard';



function card6(props){
    return(
        <div className='card'>
            
            <div className='content'>
           
                <div className='front'>
                    <h1 className='topic'>{props.heading}</h1>
                </div>
           
            
                <div className='back'>
                
                    <OthersCard/>
                    

                </div>
            
            </div>
        </div>
    )
}
export default card6;