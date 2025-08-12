import { useState, useCallback } from 'react';

// Задача: у нас є кнопка, підрахувати кількість натиснень на неї

const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);

  //   const clickHandler = () => {
  //     setClickCount(clickCount + 1);
  //   };

  const clickHandler = useCallback(() => {
    setClickCount(clickCount => clickCount + 1);
  }, []);

  return (
    <>
      <h1>{clickCount}</h1>
      <button onClick={clickHandler}>Click</button>
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
