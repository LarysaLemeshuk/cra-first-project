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

  logOut = () => {
    this.setState({
      user: {},
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          logOut: this.logOut,
        }}
      >
        App
        <Tree />
      </UserContext.Provider>
    );
  }
}
export default App;
