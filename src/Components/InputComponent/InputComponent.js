/*
У вас є компонента з інпутом.
При завантаженні компоненти - сфокусуйтесь на інпуті.
Використайте для цього реф.
Підказка.
Ви десь створюєте реф: inputRef
useEffect (() => { //componentDidMount
// Сфокусуватись на інпуті під час завантаження компоненти
inputRef.current. focus();
)，［]）；
*/

import { useRef, useEffect } from 'react';

const InputComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" placeholder="Введіть текст" />;
};

export default InputComponent;
