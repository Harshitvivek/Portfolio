import React from 'react';
import '../Card.css';
import CourseCard from './CourseCard';



function card4(props){
    return(
        <div className='card'>
            
            <div className='content'>
           
                <div className='front'>
                    <h1 className='topic'>{props.heading}</h1>
                </div>
           
            
                <div className='back'>
                
                    <CourseCard/>
                    

                </div>
            
            </div>
        </div>
    )
}
export default card4;