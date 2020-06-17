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
      <div className="work-container">
        <WorkExp
          title="Software Engineer"
          employer="DALI Lab"
          dates="January 2020 - Present"
          description="Dartmouth's DALI lab is an experiential learning lab where students
                    design and develop innovative technology solutions for outside clients.
                    My role there includes:"
          list={(
            <ul>
              <li>Developing full-stack mobile and web apps for startups and researchers</li>
              <li>Using a range of tech stacks including React/React Native, Node/Express, MongoDB, and Firebase</li>
              <li>Working closely with designers and outside partners to ensure a high-quality user experience</li>
            </ul>
        )}
        />
        <div className="divider">
          <hr />
          <div className="circle" />
          <hr />
        </div>
        <WorkExp
          title="Teaching Assistant"
          employer="Dartmouth College"
          dates="September 2019 - November 2019"
          description="I was a teaching assistant for Dartmouth's Introduction to Computer Science
                      class. My role included:"
          list={(
            <ul>
              <li>Leading a group of seven students in weekly meetings to teach and reinforce key concepts
              </li>
              <li>Holding office hours throughout the week to explain concepts or answer questions</li>
              <li>Grading projects and exams</li>
            </ul>
        )}
        />
        <div className="divider">
          <hr />
          <div className="circle" />
          <hr />
        </div>
        <WorkExp
          title="Software Engineer Intern"
          employer="RSG"
          dates="June 2019 - August 2019"
          description="Resource Systems Group (RSG) is a technology- and data-driven consulting
                      group based in Vermont. The company develops applications and analytical
                      techniques to model behavior and help comanies and governments make decisions.
                    My role there included:"
          list={(
            <ul>
              <li>Designing and building an error-monitoring system for a mobile app
                that collected users’ transportation data for analysis
              </li>
              <li>Analyzing data and communicating with developers to determine
                how the app might malfunction
              </li>
              <li>Developing a web page, using Django with Plotly, to visualize graphs
                and tables of the timing and frequency of key data collection errors
              </li>
            </ul>
        )}
        />
        <div className="divider">
          <hr />
          <div className="circle" />
          <hr />
        </div>
        <WorkExp
          title="Research Assistant"
          employer="The Dartmouth Institute"
          dates="January 2019 - June 2019"
          description="I was a research assistant to Dr. Inas Khayal, a professor at
          The Dartmouth Institute for Health Policy and Clinical Practice. My role included:"
          list={(
            <ul>
              <li>Developing a Python program, using the Blue Button 2.0 API, to extract
                and organize Center for Medicare and Medicaid Services (CMS) Medicare claims data
              </li>
              <li>Creating the foundation of a web application to allow patients
                and their doctors to access their Medicare claims data
              </li>
            </ul>
        )}
        />
        <div className="divider">
          <hr />
          <div className="circle" />
          <hr />
        </div>
      </div>
    </Layout>
  );
};
