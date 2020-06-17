import React from 'react';

const WorkExp = (props) => {
  return (
    <div className="work-exp">
      <div className="work-exp-header">
        <h3>{props.title}</h3>
        <h3 className="at">&nbsp;@&nbsp;</h3>
        <h3>{props.employer}</h3>
      </div>
      <p className="dates">{props.dates}</p>
      <p className="work-description">{props.description}</p>
      {props.list}
    </div>
  );
};

export default WorkExp;
