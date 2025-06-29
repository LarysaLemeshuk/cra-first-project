// Написати компоненту WindowResizez
// Яка виводить розмір вьюпорта на поточний момент

// Current viewport width: ....px
// Current viewport height: ....px

import React, { Component } from 'react';

class WindowResizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      with: 0,
      height: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.eventHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.eventHandler);
  }

  eventHandler = () => {
    this.setState({
      with: window.innerWidth,
      height: window.innerHeight,
    });
  };

  render() {
    const { wigth, height } = this.state;
    return (
      <div>
        <p>Current viewport width:{wigth}px</p>
        <p>Current viewport height: {height}px</p>
      </div>
    );
  }
}

export default WindowResizer;
