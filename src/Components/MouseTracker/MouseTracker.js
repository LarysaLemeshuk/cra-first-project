/*

Задача: написати трекер положення миші на нашому екрані

*/

import { useState, useEffect } from 'react';

const MouseTracker = (props) => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener('mousemove', trackerHandler);

    return () => {
      // clean function = componentWillUnmount
      window.removeEventListener('mousemove', trackerHandler);
    };
    // порожній масив залежностей = componentDidMount
  }, []); // коли ви прописуєте залежності в DependencyList = componentDidUpdatel

  const trackerHandler = (event) => {
    const { clientX, clientY } = event;
    setCoordinates({
      x: clientX,
      y: clientY,
    });
  };

  return (
    <>
      <p>X: {coordinates.x} </p>
      <p>Y: {coordinates.y}</p>
    </>
  );
};

export default MouseTracker;
