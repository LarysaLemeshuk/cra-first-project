import React, { Component } from 'react';
import { redirect } from 'react-router-dom';
import * as yup from 'yup';

const initialState = {
  firsName: '',
  lastName: '',
  email: '',
  password: '',
};

const SIGN_UP_SCHEMA = yup.object({
  firstName: yup.string().required().min(1).max(50),
  lastName: yup.string().required().min(1).max(50),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };
  }

  changeHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(SIGN_UP_SCHEMA.isValidSync(this.state));// потенційно, тут можна робити запит на сервер
  };

  render() {
    const { email, password, firstName, lastName } = this.state;
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
        <input
          type="text"
          value={password}
          placeholder="Type your password"
          name="password"
          onChange={this.changeHandler}
        />
        <button>Login</button>
      </form>
    );
  }
}

export default SignUpForm;
