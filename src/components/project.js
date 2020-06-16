import React from 'react';

export default function Project(props) {
  return (
    <div className="project">
      <div className="project-pic-container">
        <img
          alt={props.imgAlt}
          src={props.imgSrc}
          className={props.horizontal ? 'project-pic-horizontal' : 'project-pic-vertical'}
        />
      </div>
      <div className="project-text-container">
        <h2>{props.title}</h2>
        {props.text}
        <p className="small-text">{props.where}</p>
      </div>
    </div>
  );
}
