import React from 'react';
import Innerchild from './Innerchild/Innerchild';

const Child = (props) => {
    return (
        <div style={{border: '3px solid black', padding: '25px'}}>
            Child
          <Innerchild />
        </div>
      );
}

export default Child;
