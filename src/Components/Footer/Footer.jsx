import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copy-right">
            <medium className='copy-color'> Sydney and Ken's </medium><b className="footer-color"> Video Game Library &copy;{new Date().getFullYear()} | No Rights Reserved | Open-Source</b>
      </div>
      <nav>
        <li className = "footer-list"><a href="https://www.esports.com/en" target="_blank"><img src ="/images/esports-logo.jpg" className = "footer-image" alt = "esports Logo"/></a></li>
        <li className = "footer-list"><a href="https://e3expo.com/" target="_blank"><img src ="/images/e3-noyear.jpg" className = "footer-image" alt = "e3 Logo"/></a></li>
      </nav>
    </footer>
  );
};

export default Footer;