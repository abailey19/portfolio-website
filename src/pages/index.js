/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Layout from '../components/layout';
import profilePic from '../img/profile-pic.png';
import mountainPic from '../img/mountain-pic.png';
import '../styles/home.css';

export default () => {
  return (
    <Layout>
      <div className="header">
        <div>
          <img
            alt="Profile Photo"
            src={profilePic}
            className="profile-pic"
          />
        </div>
        <h1 className="header-name">Anne Bailey</h1>
        <h3 className="tagline">Software Engineer, Dartmouth College</h3>
      </div>
      <div className="about">
        <div className="about-text-container">
          <h2 className="about-header">About Me</h2>
          <p>Hi! I&apos;m Anne. I&apos;m a rising junior at Dartmouth College from Boston, MA.
            I am a computer science major and a linguistics minor, interested in software engineering
            as well as NLP and computational linguistics.
            I develop full-stack web and mobile apps for Dartmouth&apos;s DALI lab, and this winter,
            I&apos;ll be working as a software engineering intern at Cambly.
            I&apos;m especially passionate about leveraging technology for social impact.
            Outside the world of tech, you can find me acting in student-run plays,
            playing clarinet for the Dartmouth College Wind Ensemble,
            and rock climbing, hiking, and kayaking with the Dartmouth Outing Club.
          </p>
        </div>
        <div className="about-pic-container">
          <img
            alt="On Top of Mt. Lemmon"
            src={mountainPic}
            className="about-pic"
          />
        </div>
      </div>
    </Layout>
  );
};
