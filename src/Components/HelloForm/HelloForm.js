import React from 'react';

// компонент представляє собою дочірній компонент з формою, в якому буде запитуватись імʼя користувача

class HelloForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const {
      props: { sendUserNameToParent },
      state: name,
    } = this;
    sendUserNameToParent(name);
  };

  changeHandler = ({ target: { value } }) => {
    this.setState({
      name: value,
    });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <intput
          type="text"
          placeholder="Type your text"
          value={name}
          onChange={this.changeHandler}
        />
        <button type="submit">Send my name</button>
      </form>
    );
  }
}

export default HelloForm;
