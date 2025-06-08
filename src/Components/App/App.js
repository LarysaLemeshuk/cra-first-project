import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false,
    };
  }

  toggleHandler() {
    this.setState({
      on: !this.state.on,
    });
  }

  render() {
    const classForDiv = this.state.on ? 'lamp-on' : 'Lamp-off';

    return (
      <>
        <div className={classForDiv}></div>
        <button
          onClick={() => {
            this.toggleHandler();
          }}
        >
          Toggle!
        </button>
      </>
    );
  }
}

export default App;

/*
Створити кружечок-лампочку і кнопку-вимикач.
За натисненням на кнопку кружечок має 'підсвітитись', наповнитись жовтим кольором
*/
