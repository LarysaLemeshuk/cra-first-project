import React from 'react';
import useData from '../DataProvider/DataProvider';

// class PhonesLoader extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       phones: [],
//       isLoading: true,
//       isError: false,
//     };
//   }

//   componentDidMount() {
//     this.load();
//   }

//   load = () => {
//     fetch('./phones.json')
//       .then((response) => response.json())
//       .then((phones) => {
//         this.setState({
//           phones,
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

//   render() {
//     const { phones, isLoading, isError } = this.state;

// return (
//   <>
//     {isLoading && <div>Loading......</div>}
//     {isError && <div>Error happening: {isError.message}</div>}

//     <ul>
//       {phones.map((currentPhone) => (
//         <li>
//           Brand: {currentPhone.brand} --- Model: {currentPhone.model} ---
//           Price: {currentPhone.price}
//         </li>
//       ))}
//     </ul>
//   </>
// );
//   }
// }

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
