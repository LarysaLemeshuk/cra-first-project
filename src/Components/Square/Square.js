// МИ вводимо число - десь на сторінці відображається квадрат числа

import { useState, useRef } from 'react';

const Square = () => {
  const [number, setNumber] = useState(1);
  const refContainer = useRef(null);

  const changeHandler = ({ target: { value } }) => {
    setNumber(Number(value));

    const { current } = refContainer;

    if (value >= 1 && value <= 10) {
      current.style.backgroundColor = 'green';
    } else if (value >= 11 && value <= 30) {
      current.style.backgroundColor = 'yellow';
    } else if (value > 30) {
      current.style.backgroundColor = 'red';
      current.style.color = 'white';
    } else if (value < 0) {
      current.style.backgroundColor = 'pink';
      current.style.color = 'white';
    }
  };
  return (
    <>
      <h1>Number square</h1>
      <input
        type="number"
        placeholder="Enter number"
        value={number}
        onChange={changeHandler}
        ref={refContainer}
      />
      <p>Square: {number ** 2}</p>
    </>
  );
};

export default Square;

// Якщо користувач вводить число до 10 (включно) - інпут має бути зеленого кольору
// Якщо користувач вводить число  від 11 до 30 (включно) - інпут має бути жовтого кольору
// Якщо користувач вводить число  більше 30 - інпут має бути червоного кольоруБ колір тексиу - білий
// Якщо користувач вводить відʼємне число - інпут має бути рожевого кольору, колір тексту - білий
