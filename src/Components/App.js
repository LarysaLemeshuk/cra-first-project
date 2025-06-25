import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
      <button
        onClick={() => {
          window.location.assign('https://developer.mozilla.org/en-US/');
        }}
      >
        {' '}
        Assign
      </button>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        {' '}
        Reload
      </button>
      <button
        onClick={() => {
          window.location.replace(
            'https://www.youtube.com/watch?v=48KV1SJFH78'
          );
        }}
      >
        {' '}
        Replace
      </button>

      <p>lorem ipsum dolor</p>
      <button
        onClick={() => {
          window.navigator.clipboard.writeText('orem ipsum dolo');
          toast.success('🦄Copied to clipboard');
        }}
      >
        {' '}
        Click to copi text
      </button>
      <button
        onClick={() => {
          window.navigator.clipboard.readText().then((text) => {
            console.log(text);
          });
        }}
      >
        {' '}
        Read text from buffer
      </button>
      <button
        onClick={() => {
          window.navigator.geolocation.getCurrentPosition((positionObject)=>{
            console.log(positionObject);
          })
        }}
      > Get my current position
      </button>
    </>
  );
}
export default App;
