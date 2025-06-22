import React from 'react';
import FlexContainer from './FlexContainer/FlexContainer';

function App() {
  return (
    <FlexContainer
      flexDirection="row"
      justifyContent="center"
      alignItems="stretch"
    >
      <div>Item 1 </div>
      <div>Item 2 </div>
      <div>Item 3 </div>
    </FlexContainer>
  );
}

export default App;
