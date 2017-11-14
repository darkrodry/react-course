import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav role="navigation">
    <ul>
      <li>
        <NavLink to="/">Users</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact page</NavLink>
      </li>
    </ul>
  </nav>
)

export default Navigation;
