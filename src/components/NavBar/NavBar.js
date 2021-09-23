import React from 'react';

import './NavBar.css';

export const NavBar = () => {
  return (
    <div className='nav-container'>
      <h1 className='nav-logo'>CoderCandy</h1>
      <ul className='nav-items'>
        <li>
          <a href='/' className='nav-item'>
            Nosotros
          </a>
        </li>
        <li>
          <a href='/' className='nav-item'>
            Productos
          </a>
        </li>
        <li>
          <a href='/' className='nav-item'>
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
};
