import { useState, useCallback } from 'react';

// Задача: у нас є кнопка, підрахувати кількість натиснень на неї

const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  //   const clickHandler = () => {
  //     setClickCount(clickCount + 1);
  //   };

  const clickHandler = useCallback(() => {
    setClickCount((clickCount) => clickCount + 1);
  }, []);

  //   const changeHandler = ({ target: { value } }) => {
  //     setInputValue(Number(value));
  //   };

  const changeHandler = useCallback(({ target: { value } }) => {
    setInputValue(Number(value));
  }, []);

  //   const logValueHandler = () => {
  //     let sum = 0;
  //     for (let i = 0; i < inputValue; i++) {
  //       sum += i;
  //     }
  //     console.log(sum);
  //     console.log(inputValue);
  //   };

  const logValueHandler = useCallback(() => {
    let sum = 0;
    for (let i = 0; i < inputValue; i++) {
      sum += i;
    }
    console.log(sum);
    console.log(inputValue);
  }, [inputValue]);

  return (
    <>
      <h1>{clickCount}</h1>
      <button onClick={clickHandler}>Click</button>
      <input
        type="text"
        value={inputValue}
        onChange={changeHandler}
        placeholder="Введіть число, для якого потрібно знайти суму чисел"
      />
      <button onClick={logValueHandler}>Розрахувати суму </button>
    </>
  );
};

export default Clicker;

/*

const memoizedCallback = useCallback(
    () => {
    sum(a, b); a = 5, b = 10; a + b = 15
     },
    [a, b]

)



*/

/*
Використайте useCallback для оптимізації.
Огорніть logValueHandler та changeHandler y useCallback.
Використайте вже мемоізовану функцію.
*/
