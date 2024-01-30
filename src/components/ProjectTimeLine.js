import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './ProjectTimeLine.css';


function Timeline(){
    return(
      <div className="divTimeline">
        <h1 className="prHead">Project</h1>
      <VerticalTimeline>
        
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#828ba8', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        date="January 2021 - March 2021"
      >
        <h3 className="vertical-timeline-element-title">Razorpay Clone</h3>
        <h4 className="vertical-timeline-element-subtitle">Frontend || Tailwind</h4>
        <p>
          Created the Frontend part of Razorpay using Tailwind. Used diffrent functions of Tailwind in the clone of Razorpay and deployed.
        </p>
        <br/>
        <a href="https://glittering-basbousa-210996.netlify.app/" target="_blank">
          <button className="projectButton">Click</button>
        </a>
        <br/>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#828ba8', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        date="April 2023 - April 2023"
      >
        <h3 className="vertical-timeline-element-title">Top Netflix</h3>
        <h4 className="vertical-timeline-element-subtitle">React based Frontend</h4>
        <p>
          Worked on designing and developing the frontend of the application, implementing the user interface using React.js. Deployed to the GitHub. The web application suggests top Netflix show and redirects to the show.
        </p>
        <br/>
        
        <a href="https://harshitvivek.github.io/top_netflix/" target="_blank">
          <button className="projectButton">Click</button>
        </a>
        <br/>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#828ba8', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        date="November 2023 - January 2024"
      >
        <h3 className="vertical-timeline-element-title">PhotoEditor</h3>
        <h4 className="vertical-timeline-element-subtitle">Java Script || Deployed on GitHub</h4>
        <p>
          Developed a Photo Editor which helps you to transform your images with ease. A simple to use web application developed using javascript. The editor has diffent filters which are easy to adjust in real time.
        </p>
        <br/>
        <a href="https://harshitvivek.github.io/PhotoEditor/" target="_blank">
          <button className="projectButton">Click</button>
        </a>
        <br/>
      </VerticalTimelineElement>

      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#828ba8', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        date="August 2022 - August 2022"
      >
        
        <h3 className="vertical-timeline-element-title">Music Player with Stack</h3>
        
        <h4 className="vertical-timeline-element-subtitle">Mini Project deployed</h4>
        <p>
          Deployed the application to the github, the application is running to show the implimentation of stack, configured the server settings, and ensured the application is up and running smoothly. Fixing bugs, and new features will be added.
        </p>
        <br/>
        <a href="https://harshitvivek.github.io/music_player/" target="_blank">
          <button className="projectButton">Click</button>
        </a>
        <br/>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
    </div>
    );
}
export default Timeline