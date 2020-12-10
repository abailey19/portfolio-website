import React from 'react';

const Project = (props) => {
  return (
    <div className="project">
      <h2>{props.title}</h2>
      <div className="project-content">
        <div className="project-pic-container">
          <img
            alt={props.imgAlt}
            src={props.imgSrc}
            className={props.horizontal ? 'project-pic-horizontal' : 'project-pic-vertical'}
          />
        </div>
        <div className="project-text-container">
          {/* <h2>{props.title}</h2> */}
          {props.text}
          <p className="small-text">{props.where}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
