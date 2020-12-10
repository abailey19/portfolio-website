import React from 'react';

const WorkExp = (props) => {
  return (
    <div className="work-exp">
      <div className="work-exp-header">
        <h3>{props.title}</h3>
        <div className="work-exp-header-2">
          <h3 className="at work-exp-line-2">@</h3>
          <h3 className="work-exp-line-2">{props.employer}</h3>
        </div>
      </div>
      <p className="dates">{props.dates}</p>
      <p className="work-description">{props.description}</p>
      {props.list}
    </div>
  );
};

export default WorkExp;
