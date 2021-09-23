import React from 'react';

import './NavBar.css';

export const NavBar = () => {
  return (
    <div className='nav-container'>
      <h1 className='nav-logo'>Logo</h1>
      <ul className='nav-items'>
        <li>
          <a href='/' className='nav-item'>
            Item 1
          </a>
        </li>
        <li>
          <a href='/' className='nav-item'>
            Item 2
          </a>
        </li>
        <li>
          <a href='/' className='nav-item'>
            Item 3
          </a>
        </li>
      </ul>
    </div>
  );
};
