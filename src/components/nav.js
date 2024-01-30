import React from "react";
import './nav.css';


const navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navItems" >
                <li> <a className=".navLinks" href="#"><span className="navSpan">H</span>ome..</a></li>
                <li> <a className=".navLinks" href="#"><span className="navSpan">A</span>bout..</a></li>
                <li> <a className=".navLinks" href="#"><span className="navSpan">S</span>kills..</a></li>
                <li> <a className=".navLinks" href="#"><span className="navSpan">P</span>rojects..</a></li>
                <li> <a className=".navLinks" href="#"><span className="navSpan">C</span>ontact..</a></li>
            </ul>
        </nav>
    );
}
export default navbar