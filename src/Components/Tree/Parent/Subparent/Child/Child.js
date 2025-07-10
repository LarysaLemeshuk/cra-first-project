import React from 'react';
import Innerchild from './Innerchild/Innerchild';

const Child = (props) => {
  return (
    <div>
      Child
      <Innerchild />
    </div>
  );
};

export default Child;
