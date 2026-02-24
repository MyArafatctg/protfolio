import React from 'react';
import './Footer.css';
import { LuDownload } from "react-icons/lu";

import github from '../../images/png-clipart-github-pages-logo-repository-fork-github-mammal-cat-like-mammal-thumbnail-removebg-preview (1).png';
import linkedin from '../../images/linkedin.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="nav-content-main">
        <ul className="footer-menu">
          <li><a className='menu-item-footer' href="#home">Home</a></li>
          <li><a className='menu-item-footer' href="#about">About</a></li>
          <li><a className='menu-item-footer' href="#skills">Skills</a></li>
          <li><a className='menu-item-footer' href='#projects'>Projects</a></li>
          <li><a className='menu-item-last-footer' href="#contact">Contact Me</a></li>
        </ul>
        <button className='contact-btn-footer'>
          Resume <LuDownload className='icon-footer-btn'/>
        </button>
      </div>
      
      <div className="content">
        <p className='details-p'>© {currentYear} Yasin Arafat, All Rights Reserved</p>
        <div className="content-icons">
          <a href="https://github.com/MyArafatctg" target="_blank" rel="noopener noreferrer">
            <img className='icon-footer' src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/md-yasin-arafat-4588941bb/" target="_blank" rel="noopener noreferrer">
            <img className='icon-fiverr icon-footer' src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
