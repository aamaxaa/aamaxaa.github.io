import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "../css/styles.css";

const ProjectCard = ({ title, description, repoLink }) => {
  return (
    <div className="card card-custom shadow">
      <div className="card-body">
        <h5 className="card-title-only center">{title}</h5>
        <div className="card-body-hidden">
          <p className="card-text">{description}</p>
          <a href={repoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> {/* GitHub icon */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
