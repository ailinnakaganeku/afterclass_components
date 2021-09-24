import React from 'react';

import './NavBar.css';

const data = [
  { string: 'Nosotros', id: '1' },
  { string: 'Productos', id: '1' },
  { string: 'Contacto', id: '1' },
];

const NavBar = () => {
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

export default NavBar;
