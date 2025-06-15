import React from 'react';
import './style.css';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isEmailValid: true,
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    //Якщо на момент відправлення форми,всередині рядкі відсутня "@" = форма невалідна
    if (!this.state.email.includes('@')) {
      this.setState({
        isEmailValid: false,
      });
    } else {
      this.setState({
        isEmailValid: true,
      });
    }
  };

  universalChangeHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  //   changeEmailHandler = ({ target: { value } }) => {
  //     this.setState({
  //       email: value,
  //     });
  //   };

  //   changePasswordlHandler = ({ target: { value } }) => {
  //     this.setState({
  //       password: value,
  //     });
  //   };

  render() {
    const { email, password, isEmailValid } = this.state;

    return (
      <>
        <h1>Sign In Form</h1>
        <form className="form-wrapper" onSubmit={this.submitHandler}>
          <label>
            Type your email
            <input
              type="text"
              className={isEmailValid ? '' : 'invalid'}
              name="email"
              onChange={this.universalChangeHandler}
              value={email}
            />
          </label>
          <label>
            Type your password
            <input
              type="password"
              name="password"
              onChange={this.universalChangeHandler}
              value={password}
            />
          </label>

          <button type="submit"> Send form</button>
        </form>
      </>
    );
  }
}

export default SignInForm;

/*
Написати компоненту з формою, що складається з одного інпута( імʼя користувача) і кнопки відправки.
За натисненням на кнопку відправки форми виникає напис, який вітає(alert) користувача тим імʼям, яке було введено в інпут


Форма, яка вітається повинна бути всередині батьківської форми.
В батьківській формі зберігається імʼя користувача у стейті.
Тобто, форма у якій запитується імʼя користувача - дочірня форма.
Форма, у якій відображається вітання імʼя користувача - батьківська форма.
Дитина повинна передати батьку пате юзера, щоб він зміг з ним привітатися.



*/




