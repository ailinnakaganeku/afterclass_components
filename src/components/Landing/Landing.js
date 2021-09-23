import React from 'react';

import './Landing.css';
import { data } from '../../assets/db/data.json';
import Card from '../Card/Card';

const Landing = () => {
  return (
    <div className='landing-container'>
      {data.map((data) => (
        <Card image={data.image} name={data.name} key={data.id} />
      ))}
    </div>
  );
};

export default Landing;
