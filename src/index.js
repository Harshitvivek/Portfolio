import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/nav';
import Icons from './components/contactIcons';
import IconsB from './components/IconsBottom';
import ContactIconsR from './components/ContactIconsR';
import Home from './components/home';
import './container.css';
import './components/contactIcons.css';
import About from './components/About';
import Skills from './components/Skills';
// import Project from './components/Project';
import Timeline from './components/ProjectTimeLine';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import App from "./App";

ReactDom.render(
  <>
    <Icons/>
  <div className='container'>
    <Icons/>
    <Home/>
    <ContactIconsR/>
  </div>


    <About/>
    <Skills/>
    <Timeline/>
    <Feedback/>
    <Footer/>
    
  </>,
  document.getElementById('root')
)
