import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Math Magicians Calculator App</Link>
    <div>
      <button type="button"><NavLink to="/">Home</NavLink></button>
      <button type="button"><NavLink to="/calculator">Calculator</NavLink></button>
      <button type="button"><NavLink to="/quote">Quote</NavLink></button>
    </div>
  </nav>
);

export default Navbar;
