import React from 'react';
import useData from '../DataProvider/DataProvider';


const PhonesLoader = () => {
  const { data: phones, isLoading, error } = useData(getPhones);

  function getPhones() {
    return fetch('./phones.json').then((response) => response.json());
  }

  return (
    <>
      {isLoading && <div>Loading......</div>}
      {error && <div>Error happening: {error.message}</div>}

      <ul>
        {phones.map((currentPhone, index) => (
          <li key={index}>
            Brand: {currentPhone.brand} --- Model: {currentPhone.model} ---
            Price: {currentPhone.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PhonesLoader;
