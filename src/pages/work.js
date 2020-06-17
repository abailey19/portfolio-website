import React from 'react';
import Layout from '../components/layout';
import WorkExp from '../components/workexp';

import '../styles/work.css';

export default () => {
  return (
    <Layout>
      <div className="header">
        <h1>Work Experience</h1>
      </div>
      <WorkExp
        title="Software Engineer"
        employer="DALI Lab"
        time="January 2020 - Present"
        description={(
          <ul>
            <li>Thing</li>
            <li>Another Thing</li>
          </ul>
        )}
      />
      <div className="divider">
        <hr />
        <div className="circle" />
        <hr />
      </div>
    </Layout>
  );
};
