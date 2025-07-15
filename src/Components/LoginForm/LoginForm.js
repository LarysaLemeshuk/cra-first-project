import React, { Component } from 'react';
import { SIGN_UP_SCHEMA } from '../../schemas';

const initialState = {
  firsName: '',
  lastName: '',
  email: '',
  password: '',
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      isError: null,
    };
  }

  changeHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    try {
      const userObject = SIGN_UP_SCHEMA.validateSync(this.state);

      this.setState({
        isError: null,
      });
    } catch (err) {
      this.setState({
        isError: err,
      });
    }
  };

  render() {
    const { email, password, firstName, lastName, isError } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={firstName}
          placeholder="Type your firstName"
          name="firstName"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Type your lastName"
          name="lastName"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          value={email}
          placeholder="Type your email"
          name="email"
          onChange={this.changeHandler}
        />
        <p></p>
        <input
          type="text"
          value={password}
          placeholder="Type your password"
          name="password"
          onChange={this.changeHandler}
        />
        <button>Login</button>

        {isError && (
          <p style={{ color: 'red', fontSize: '20px' }}>{isError.message}</p>
        )}
      </form>
    );
  }
}

export default SignUpForm;
