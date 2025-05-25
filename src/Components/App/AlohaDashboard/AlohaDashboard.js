import React from 'react';
import Aloha from '../Aloha';

class AlohaDashboard extends React.Component {
  render() {
    return (
      <>
        <Aloha name="Alex" />
        <Aloha name="John" />
        <Aloha name="Simon" />
        <Aloha name="Draco" />
        <Aloha name="Jane" />
      </>
    );
  }
}

export default AlohaDashboard;
