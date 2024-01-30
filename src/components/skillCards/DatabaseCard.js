import React from 'react';
import './DatabaseCard.css';


function DatabaseCard(){
    return(
    <div>
        <h4 className="loadHeader">MongoDB</h4>
        <div className="loadContainer" >
            <div className="mongo">
    
            </div>
        </div>
        <h4 className="loadHeader">SQL</h4>
        <div className="loadContainer" >
            <div className="sql">
    
            </div>
        </div>
        <h4 className="loadHeader">Firebase</h4>
        <div className="loadContainer" >
            <div className="fire">
    
            </div>
        </div>
        <h4 className="loadHeader">Oracle</h4>
        <div className="loadContainer" >
            <div className="oracle">
    
            </div>
        </div>
        
    </div>
    )
}
export default DatabaseCard;