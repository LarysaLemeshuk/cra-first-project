import { useReducer } from 'react';
import { registrationReducer } from '../../reducers/registrationReducer';
import CONSTANTS from '../../constants';
const { ACTIONS } = CONSTANTS;

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(registrationReducer, initialState);
  const { firstName, lastName, email, password } = state;

  const universalChangeHandler = ({ target: { value, name } }) => {
    dispatch({
      type: ACTIONS.INPUT_CHANGE,
      payload: {
        value,
        name,
      },
    });
  };
  const submitHandler = (event) => {
    event.preventDefault()
    console.log(state);// тут може бути запит на сервер
  }

  return (
    <form>
      <input
        type="text"
        name="firstName"
        placeholder="Type your firstName"
        value={firstName}
        onChange={universalChangeHandler}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Type your lastName"
        value={lastName}
        onChange={universalChangeHandler}
      />
      <input
        type="email"
        name="email"
        placeholder="Type your email"
        value={email}
        onChange={universalChangeHandler}
      />
      <input
        type="text"
        name="password"
        placeholder="Type your password"
        value={password}
        onChange={universalChangeHandler}
      />
      <button type='submit' onClick={submitHandler}>Registration</button>
    </form>
  );
};

export default RegistrationForm;
