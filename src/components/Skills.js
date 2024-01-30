import React from 'react';
import Card from './skillCards/Card';
import Card2 from './skillCards/Card2';
import Card3 from './skillCards/Card3';
import Card4 from './skillCards/Card4';
import Card5 from './skillCards/Card5';
import Card6 from './skillCards/Card6';
import './Skills.css';
import {  Slide } from 'react-awesome-reveal';


// const c = 90;
// const html = 100;
// const css = 100;
// const js = 70;

// const react= 70;
// const node = 60;
// const express = 70;
// const bootstrap = 100;

// const mongodb = 60;
// const sql = 80;
// const firebase = 50;
// const oracle = 50;

// const ds = 70;
// const oops = 80;
// const dbms = 90;
// const algo = 70;


// const vscode = 70;
// const git = 70;
// const videoE = 90;
// const github = 80;

// const other =20 ;

function skills(){
    return(
        <Slide  duration={2000} direction='up' cascade={true} fraction={0.9}>
        <div className='skills'>
            
            <div className='head'>
                <h1>Skills</h1>
            </div>
            
            
            <div className='cards'>
           
            <Card heading="languages"/>

            <Card2 heading="Frameworks"/>
            
           
            <Card3 heading="Data Base" />

            <Card4 heading="Course"/>
            
            <Card5 heading="Plateform" />
            
            <Card6 heading="Others" />
        
            </div>
           
           
            
            
        </div>
        </Slide>
    )
}
export default skills;