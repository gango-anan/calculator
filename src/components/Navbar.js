import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav data-testid="navbar-test">
    <Link to="/">Math Magicians Calculator App</Link>
    <div>
      <button type="button" data-testid="navbar-link1"><NavLink to="/">Home</NavLink></button>
      <button type="button" data-testid="navbar-link2"><NavLink to="/calculator">Calculator</NavLink></button>
      <button type="button" data-testid="navbar-link3"><NavLink to="/quote">Quote</NavLink></button>
    </div>
  </nav>
);

export default Navbar;
