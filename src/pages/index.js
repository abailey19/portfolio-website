/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import profilePic from '../img/profile-pic.png';

export default () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="profile-pic-container">
          <img
            alt="Profile Photo"
            src={profilePic}
            className="profile-pic"
          />
        </div>
        <div className="home-text-container">
          <h2>Hi! I&apos;m Anne!</h2>
          <p>
            I&apos;m a rising junior at Dartmouth College from Boston, MA.
            I&apos;m studying Computer Science and Linguistics
            and am passionate about leveraging technology for social impact.
          </p>
          <Link to="/projects">
            <button type="button" className="work-btn">Check out my work!</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
