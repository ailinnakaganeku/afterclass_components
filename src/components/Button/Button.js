import React from 'react';

import { Button } from 'react-bootstrap';

const ButtonPrimary = ({ button_string, onClick }) => {
  return (
    <Button variant='dark' onClick={onClick}>
      {button_string}
    </Button>
  );
};

export default ButtonPrimary;
