import React from 'react';
import Tree from './Tree/Tree';
import { UserContext } from '../contexts/userContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: 'John',
        lastName: ' Doe',
        email: 'johndoe@gmail.com',
        avatar:
          'https://www.havahart.com/media/wysiwyg/hh/cms/lc/dogs/hh-animals-dog-1.png',
      },
    };
  }
  return() {
    return (
      <UserContext.Provider value={this.state.user}>
        <Tree />
      </UserContext.Provider>
    );
  }
}
export default App;
