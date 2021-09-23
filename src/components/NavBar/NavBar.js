import React from 'react';

import './NavBar.css';

var data = [
  { string: 'Nosotros', id: '1' },
  { string: 'Productos', id: '1' },
  { string: 'Contacto', id: '1' },
];

export const NavBar = () => {
  return (
    <div className='nav-container'>
      <h1 className='nav-logo'>CoderCandy</h1>
      <ul className='nav-items'>
        {data.map((data) => (
          <li key={data.id}>
            <a href='/' className='nav-item'>
              {data.string}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
