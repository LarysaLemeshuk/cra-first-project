import { useState, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CLICK_INCREMENT': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    // case 'INPUT_CHENGE': {
    //   // 1. Розбираємось з атрибутом пате
    //   // 2. Коли ми розібралися, в який саме стейт має зайти значення - кладемо у відповідний стейт значення
    //   break;
    // }

    default: {
      return state;
    }
  }
}

const initialState = {
  count: 0,
};

const Clicker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = () => {
    dispatch({
      type: 'CLICK_INCREMENT',
    }); // передати обʼєкт action
  };

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={clickHandler}>Increment</button>
    </>
  );
};

export default Clicker;

// const RegistrationForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const universalChangeHandler = ({ target: { value, name } }) => {
//     switch (name) {
//       case ' firstName': {
//         setFirstName(value);
//         break;
//       }
//       case ' lastName': {
//         setLastName(value);
//         break;
//       }
//       case ' email': {
//         setEmail(value);
//         break;
//       }
//       case ' password': {
//         setPassword(value);
//         break;
//       }

//       default: {
//         break;
//       }
//     }
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         name="firstName"
//         placeholder="Type your firstName"
//         value={firstName}
//         onChange={universalChangeHandler}
//       />
//       <input
//         type="text"
//         name="lasttName"
//         placeholder="Type your lastName"
//         value={lastName}
//         onChange={universalChangeHandler}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Type your email"
//         value={email}
//         onChange={universalChangeHandler}
//       />
//       <input
//         type="text"
//         name="password"
//         placeholder="Type your password"
//         value={password}
//         onChange={universalChangeHandler}
//       />
//     </form>
//   );
