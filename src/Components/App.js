import React from 'react';
import MouseTracker from './MouseTracker/MouseTracker';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <MouseTracker />;
  }
}
export default App;
