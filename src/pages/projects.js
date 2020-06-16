/* eslint-disable global-require */
import React from 'react';
import Layout from '../components/layout';
import Project from '../components/project';

import peertech from '../img/peertech.png';
import mccv from '../img/mccv.png';

import '../styles/projects.css';

export default () => {
  return (
    <Layout>
      <div className="header">
        <h1>Projects</h1>
      </div>
      <Project
        title="PeerTECH"
        text={(
          <p>Developed in partnership with Dr. Karen Fortuna of Dartmouth&apos;s Geisel School of Medicine,
            PeerTECH connects adults with severe mental health conditions to trained peer supporters with lived experience of those conditions.
            It serves as a platform for users and their peer supporters to communicate,
            set goals and wellness plans, and access resources that assist in the recovery process.
            The mobile app and its accompnaying admin portal are on track to begin
            trial runs in the fall of 2020.
          </p>
        )}
        where="Created through Dartmouth's DALI lab."
        imgAlt="PeerTECH"
        imgSrc={peertech}
      />
      <div className="divider">
        <hr />
        <div className="circle" />
        <hr />
      </div>
      <Project
        title="Magnuson Center Campus Ventures"
        text={(
          <p>Dartmouth&apos;s <a href="https://magnuson.dartmouth.edu/">Magnuson Center for Entrepreneurship</a>
            &nbsp;hosts an in-person student-startup matching event every term, in which local startups are manually
            matched with student volunteers after only a short conversation. In order to make this process
            more intuitive and accessible, we created a platform on which startups can post position openings
            and look for volunteers, while students can search for and apply to positions. A matching algorithm suggests
            positions for students and qualified employees for startups.
          </p>
        )}
        where="Final Project for CS52: Full-Stack Web Development"
        imgAlt="Magnuson Center Campus Ventures"
        imgSrc={mccv}
        horizontal
      />
      <div className="divider">
        <hr />
        <div className="circle" />
        <hr />
      </div>
    </Layout>
  );
};
