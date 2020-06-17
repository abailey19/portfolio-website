import React from 'react';
import { Link } from 'gatsby';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navlink name">Anne Bailey</Link>
      <div className="navlinks">
        <Link to="/" className="navlink" activeClassName="active">Home</Link>
        <Link to="/projects/" className="navlink" activeClassName="active">Projects</Link>
        <Link to="/work/" className="navlink" activeClassName="active">Work</Link>
      </div>
    </div>
  );
};

export default Navbar;
