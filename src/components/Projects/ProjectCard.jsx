import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, image, link }) => {
  return (
    <div className="project-card dark">
      <h3 className="project-title">{title}</h3>
      
      <div className="image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      
      {/* <a href={link} className="learn-more-btn">
        Learn More
      </a> */}
    </div>
  );
};

export default ProjectCard;