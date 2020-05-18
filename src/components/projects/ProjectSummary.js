import React from "react";

const ProjectSummary = ({ project }) => {
  // console.log(project);
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by {`${project.authorFirstName} ${project.authorLastName}`}
        </p>
        <p className="grey-text">{project.createdAt}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
