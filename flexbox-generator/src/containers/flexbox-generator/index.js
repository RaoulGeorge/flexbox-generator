import React from 'react';
import Left from '../left/index';
import Right from '../right/index';
import './flexbox-generator.scss';

const FlexboxGenerator = () => {
  return (
    <div className="container">
      <Left />
      <Right />
    </div>
  );
};

export default FlexboxGenerator;
