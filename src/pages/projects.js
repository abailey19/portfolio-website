/* eslint-disable global-require */
import React from 'react';
import Layout from '../components/layout';
import Project from '../components/project';

import peertech from '../img/peertech.png';
import mccv from '../img/mccv.png';
import covidVis from '../img/covid-vis.png';
import sixAM from '../img/6amhealth.png';
import blog from '../img/blog.png';
import tse from '../img/tse.png';

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
            The mobile app is on the App Store and Google Play Store and is being used in clinical trials
            with its accompnaying admin portal.
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
            &nbsp;hosts a student-startup matching event every term, in which local startups used to be manually
            matched with student volunteers after only a short conversation. We created a &nbsp;
            <a href="https://dartmouth-mccv.surge.sh/">platform</a>, now used by Magnuson,
            to make this process more intuitive and accessible. Startups can post position openings
            and look for volunteers, students can search for and apply to positions, and a matching algorithm
            suggests positions for students and qualified employees for startups.
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
      <Project
        title="COVID-19 Data Visualization"
        text={(
          <p>A website that uses New York Times and U.S. Census data to visualize the status
            of the COVID-19 pandemic in the United States. Users can view cumulative and daily
            case and death counts on the state and county level. Admin users can also edit
            data should they receive updates or refresh the data to match the NY Times&apos; reports.
          </p>
        )}
        where="Final Project for CS61: Database Systems"
        imgAlt="COVID-19 Data Visualization"
        imgSrc={covidVis}
        horizontal
      />
      <div className="divider">
        <hr />
        <div className="circle" />
        <hr />
      </div>
      <Project
        title="6AM Health"
        text={(
          <p>6AM Health is a Boston-based startup focused on providing healthy, easily-accessible
            food to customers. The mobile app allows users to order ahead to a <q>Fresh Fridge</q>
            &nbsp;in their office building. The accompanying admin portal allows 6AM Health employees
            to manage orders and products.
          </p>
        )}
        where="Created through Dartmouth's DALI lab."
        imgAlt="6AM Health"
        imgSrc={sixAM}
        horizontal
      />
      <div className="divider">
        <hr />
        <div className="circle" />
        <hr />
      </div>
      <Project
        title="Nature Blog"
        text={(
          <p>A simple blog website that allows users to write, edit, and delete their own posts,
            as well as comment on others&apos; posts.
          </p>
        )}
        where="Project for CS52: Full-Stack Web Development"
        imgAlt="Nature blog"
        imgSrc={blog}
        horizontal
      />
      <div className="divider">
        <hr />
        <div className="circle" />
        <hr />
      </div>
      <Project
        title="Tiny Search Engine"
        text={(
          <p>A command-line search engine written in C, consisting of a web crawler, an indexer that
            parses HTML and records word counts for each web page, and a query engine
            that returns results ranked by keyword frequency.
          </p>
        )}
        where="Project for CS50: Software Design and Implementation"
        imgAlt="Tiny Search Engine"
        imgSrc={tse}
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
