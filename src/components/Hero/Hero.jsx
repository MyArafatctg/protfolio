import React from 'react'
import './Hero.css'
import man from '../../images/logo.png'
import '../../App.css'
import 'animate.css'
import { LuDownload } from "react-icons/lu";
import toast from 'react-hot-toast';

const Hero = () => {

    const btnResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/Resume_of_Md_Yasin_Arafat.pdf';   // file inside public folder
        link.download = 'Resume_of_Md_Yasin_Arafat.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast.success('Resume Downloaded ✅');
    }
    

return (
    <section className='Hero-Container' id='home'>
        <div className="hero">
            <img src={man} alt="" className='animate__animated animate__fadeIn'/>
            <h1 className='animate__animated animate__fadeInUp'>👋 I'm <span>Yasin Arafat</span>, Fullstack Software Engineer.</h1>
            <p className='animate__animated animate__fadeInUp'>A passionate Full-Stack Software Engineer specializing in Java, Spring Boot, React, TypeScript, and Oracle.
                I build scalable, secure, and high-performance web applications that solve real-world business problems with clean architecture and modern design.</p>
            <div className="hero-action">
                <div className="hero-connect animate__animated animate__fadeInUp"><a className='text-d-none' href="#contact">Connect With Me</a></div>
                <div className="hero-resume animate__animated animate__fadeInUp" onClick={btnResumeDownload}>Resume   <LuDownload className='icon'/></div>
            </div>
        </div>
    </section>
)
}

export default Hero