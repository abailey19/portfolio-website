import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../styles/navbar.css';
import hamburger from '../img/hamburger.png';

const MyNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <div className="navbar">
        <Link to="/" className="navlink name">Anne Bailey</Link>
        <div className="navlinks">
          <Link to="/" className="navlink" activeClassName="active">Home</Link>
          <Link to="/projects/" className="navlink" activeClassName="active">Projects</Link>
          <Link to="/work/" className="navlink" activeClassName="active">Work</Link>
        </div>
        <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
          <img
            src={hamburger}
            className="hamburger-img"
          />
        </div>
      </div>
      {navOpen 
      && (
        <div className="dropdownLinks">
          <Link to="/" className="navlink dropdownLink" activeClassName="active">Home</Link>
          <Link to="/projects/" className="navlink dropdownLink" activeClassName="active">Projects</Link>
          <Link to="/work/" className="navlink dropdownLink" activeClassName="active">Work</Link>
        </div>
      )}
    </div>
  );
};

export default MyNavbar;
