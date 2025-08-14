import { useState, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CLICK_INCREMENT': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case 'CLICK_DECREMENT': {
      return {
        ...state,
        count: state.count - 1,
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

  const decrementClickHandler = () => {
    dispatch({ type: 'CLICK_DECREMENT' });
  };

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={clickHandler}>Increment</button>
      <button onClick={decrementClickHandler}>Decrement</button>
    </>
  );}


export default Clicker;