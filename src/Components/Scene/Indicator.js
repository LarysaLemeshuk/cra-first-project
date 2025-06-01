/*
Задача

Зробити функціональну компоненту, яка ендерить невеликий div 200 x 200.
рендерить там текст, який ця компонента має рендерити, вона отримує через пропси

*/

import './style.css';

function Indicator(props) {
  return <div className="indicator">{props.text}</div>;
}

export default Indicator;
