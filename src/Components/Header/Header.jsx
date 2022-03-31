import React from "react";
import './Header.css';

const Header = () => {
    return (  
    <div className ="nav-background">
        <div className = "logo">
            <h1><a href="http://localhost:3000/" className = "logo-decoration">Video<medium className= 'logo-part-two'>Games</medium></a></h1>
        </div>
        <nav>
            <li className = "navbar-list"><a href="https://github.com/syd-toon17" className = "navbar-ref" target="_blank">Sydney's GitHub</a></li>
            <li className = "navbar-list"><a href="https://github.com/kenubwell" className = "navbar-ref" target="_blank">Ken's GitHub</a></li>
            <li className = "navbar-list"><a href="https://devcodecamp.com/" target="_blank"><img src ="/images/devCodeCamp-Logo-12W.jpeg" className = "navbar-image" alt = "devCodeCamp Logo"/></a></li>
        </nav>
    </div>
    );
}
 
export default Header;