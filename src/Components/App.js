import React from 'react';
import NewCounter from './NewCounter/NewCounter';
import NewCounterFunction from './NewCounter/NewCounterFunction';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

 

  render() {
    return <NewCounterFunction  />;
  }
}
export default App;
