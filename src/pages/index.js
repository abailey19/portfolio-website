/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import profilePic from '../img/profile-pic.png';
import mountainPic from '../img/mountain-pic.png';
import '../styles/home.css';

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
            I&apos;m a rising junior at Dartmouth College interested in Computer Science and Linguistics.
          </p>
          <button
            type="button"
            className="nav-btn"
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          >About Me
          </button>
          <Link to="/projects">
            <button type="button" className="nav-btn">Check out my work!</button>
          </Link>
        </div>
      </div>
      <div className="about-container">
        <div className="about-text-container">
          <h2>About Me</h2>
          <ul>
            <li>I&apos;m a Dartmouth &apos;22 from Boston, MA.</li>
            <li>I am a computer science major and linguistics minor, intersted in exploring NLP and computational linguistics.</li>
            <li>I develop full stack web and mobile apps for Dartmouth&apos;s DALI lab.</li>
            <li>I&apos;m especially passionate about leveraging technology for social impact.</li>
            <li>Outside the world of tech, you can find me acting in student-run plays,
              playing clarinet for the Dartmouth College Wind Ensemble,
              and rock climbing, hiking, and kayaking with the Dartmouth Outing Club.
            </li>
          </ul>
        </div>
        <div className="about-pic-container">
          <img
            alt="On Top of Mt. Lemmon"
            src={mountainPic}
            className="profile-pic"
          />
        </div>
      </div>
    </Layout>
  );
};
