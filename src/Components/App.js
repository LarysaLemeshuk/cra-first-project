import React from 'react';
import PhonesLoader from './PhonesLoader/PhonesLoader';
import TVLoader from './TVLoader/TvLoader';
import DataProvider from './DataProvider/DataProvider';

function App() {
  return (
    <>
      <DataProvider
        loadData={() => {
          return fetch('./phones.json').then((response) => response.json());
        }}
      >
        {(state) => {
          const { data, isLoading, isError } = state;

          return (
            <>
              {isLoading && <div>Loading......</div>}
              {isError && <div>Error happening: {isError.message}</div>}

              <ul>
                {data.map((data, index) => (
                  <li key={index}>
                    Brand: {data.brand} --- Model: {data.model} --- Price:
                    {data.price}
                  </li>
                ))}
              </ul>
            </>
          );
        }}
      </DataProvider>

      <DataProvider
        loadData={() => {
          return fetch('./tv.json').then((response) => response.json());
        }}
      >
        {(state) => {
          const { data, isLoading, isError } = state;

          return (
            <>
              {isLoading && <div>Loading......</div>}
              {isError && <div>Error happening: {isError.message}</div>}

              <ol>
                {data.map((data, index) => (
                  <li key={index}>
                    Brand: {data.brand} --- Model: {data.model} --- Price:
                    {data.price}
                  </li>
                ))}
              </ol>
            </>
          );
        }}
      </DataProvider>
    </>
  );
}
export default App;
