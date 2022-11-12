import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home  |',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator |',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <nav>
      <h2>Math Magicians</h2>
      <ul className="nav_link">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
