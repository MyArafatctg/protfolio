import ProjectCard from "./ProjectCard";
import gms from "../../images/gms.jpg";
import rpa from "../../images/rpa.png";
import sms from "../../images/sms.png";
import ecom from "../../images/ecom.png";

const ProjectList = () => {
  const myProjects = [
    { title: "Garments Management System (GMS)", image: gms, link: "#" },
    { title: "Robotic Process Automation (RPA)", image: rpa, link: "#" },
    { title: "E-Commerce App", image: ecom, link: "#" },
    { title: "Student Management System", image: sms, link: "#" },
  ];

  return (
    <section className='contact-container' id='projects'>
      <h2>Projects</h2>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '20px',
      padding: '20px' 
    }}>
      {myProjects.map((proj, index) => (
        <ProjectCard key={index} {...proj} /> 
      ))}
    </div>
    </section>
  );
};

export default ProjectList