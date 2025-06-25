import React from 'react';

function App() {
  return (
    <>
      <button
        onClick={() => {
          window.close();
        }}
      >
        Close page
      </button>
      ;
      <button
        onClick={() => {
          window.open('https://developer.mozilla.org/en-US/');
        }}
      >
        Close GH
      </button>
      ;
    </>
  );
}
export default App;
