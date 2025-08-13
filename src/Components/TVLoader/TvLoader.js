import React, { Component } from 'react';
import useData from '../DataProvider/DataProvider';

// class TVLoader extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       tv: [],
//       isLoading: true,
//       isError: false,
//     };
//   }

//   componentDidMount() {
//     this.load();
//   }

//   load = () => {
//     fetch('./tv.json')
//       .then((response) => response.json())
//       .then((tv) => {
//         this.setState({
//           tv,
//         });
//       })
//       .catch((error) => {
//         this.setState({
//           isError: error,
//         });
//       })
//       .finally(() => {
//         this.setState({
//           isLoading: false,
//         });
//       });
//   };

// render() {
//   const { tv, isLoading, isError } = this.state;

//   return (
//     <>
//       {isLoading && <div>Loading......</div>}
//       {isError && <div>Error happening: {isError.message}</div>}

//       <ul>
//         {tv.map((currentTV) => (
//           <li>
//             Brand: {currentTV.brand} --- Model: {currentTV.model} --- Price:{' '}
//             {currentTV.price}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
//   }
// }

// export default TVLoader;

const TvLoader = () => {
  const { data: tv, isLoading, error } = useData(getTv);

  function getTv() {
    return fetch('./tv.json').then((response) => response.json());
  }

  return (
    <>
      {isLoading && <div>Loading......</div>}
      {error && <div>Error happening: {error.message}</div>}

      <ul>
        {tv.map((currentTV, index) => (
          <li key={index}>
            Brand: {currentTV.brand} --- Model: {currentTV.model} --- Price:{' '}
            {currentTV.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TvLoader;
