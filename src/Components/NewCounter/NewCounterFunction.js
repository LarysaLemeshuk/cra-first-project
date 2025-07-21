import React, { useState } from 'react';


const NewCounterFunction = (props) => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCounter(counter + step);
  };

  const changeHandler = ({ target: { value } }) => {
    setStep(Number(value));
  };

  return (
    <>
      {counter}
      <input type='number' onChange={changeHandler} value={step} />
      <button onClick={increment}>+</button>
    </>
  );
};

export default NewCounterFunction;
