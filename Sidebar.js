import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav className="sidebar">
    <ul>
      <li><NavLink to="pricing">Dynamic Pricing</NavLink></li>
      <li><NavLink to="social">Social Trends</NavLink></li>
      <li><NavLink to="fraud">Fraud Detection</NavLink></li>
    </ul>
  </nav>
);

export default Sidebar;

