import React from 'react';

import './Card.css';
import ButtonPrimary from '../Button/Button';

const Card = ({ image, name }) => {
  const handleOnClick = () => {
    alert('Le diste Click');
  };

  return (
    <div
      className='card-container'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='card-button-container'>
        <ButtonPrimary button_string='Ver Más' onClick={handleOnClick} />
      </div>
      <div className='card-content'>
        <span className='card-span'>{name}</span>
      </div>
    </div>
  );
};

export default Card;
