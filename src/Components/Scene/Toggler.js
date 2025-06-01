import React from 'react';

class Toggler extends React.Component {
  clickHandler() {
    this.props.changeParentState();
  }

  render() {
    return (
      <button
        onClick={() => {
          this.clickHandler();
        }}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default Toggler;
