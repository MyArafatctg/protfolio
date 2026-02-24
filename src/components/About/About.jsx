import React from 'react'
import './About.css'
import man from '../../images/profile.JPG'
import { IoMdTime } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import toast from 'react-hot-toast';

const About = () => {

  const btnToast = () => {
    toast.loading('Navigating..')
  }

  return (
    <section id='about' className='about-container'>
      <h5 className='heading'>About Me</h5>
      <div className="container about__container">
         <div className="about__me">
            <div className="about__me-image">
              <img src={man} alt="My-Image" className='My-Image block'/>
            </div>
         </div>

         <div className="about__content">
            <div className="about__cards">
              <article className='about__card block'>
                <IoMdTime className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about__card block'>
                <FaRegFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>30+ Projects</small>
              </article>

              {/* <article className='about__card block'>
                <FaRegUser className='about__icon'/>
                <h5>Clients</h5>
                <small>6</small>
              </article> */}
            </div>

            <p className='context-text'>
              I’m a passionate <b>Software Engineer</b> with strong expertise in <b>Java, Spring Boot, React, TypeScript, Oracle APEX, and Oracle Database.</b> 
              I specialize in building scalable full-stack applications that solve real-world business problems with clean architecture and performance-focused design.
              <br/>
              I have hands-on experience developing enterprise systems including <b>Garments Management Systems (GMS) </b>, POS software, <b>Automation</b> and modern eCommerce platforms. From secure REST APIs with JWT authentication to responsive React frontends and optimized database design, I enjoy building complete end-to-end solutions.
            </p>

            <a href="#contact" className='btn2 block' onClick={btnToast}>Let's Talk </a>
         </div>
      </div>
    </section>
  )
}

export default About
