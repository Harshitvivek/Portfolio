import React from 'react';
import './Loader.css';

function loader(props){
    return(
        <div className="loadContainer" >
            <div className="Loading ">
                {props.id}
            </div>
        </div>
    )
}
export default loader;