import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav data-testid="navbar-test" className="navigation-bar">
    <div className="banner">
      <Link to="/" className="banner-link">Math Magicians Calculator App</Link>
    </div>
    <ul className="navbar-links">
      <li data-testid="navbar-link1"><NavLink to="/" className="home">Home</NavLink></li>
      <li data-testid="navbar-link2"><NavLink to="/calculator">Calculator</NavLink></li>
      <li data-testid="navbar-link3"><NavLink to="/quote">Quote</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
