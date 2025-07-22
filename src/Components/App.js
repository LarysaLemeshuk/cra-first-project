import React from 'react';

import Tree from './Tree/Tree';
import { ThemeContext } from '../contexts/themeContext';
import { UserContext } from '../contexts/userContext';
import CONSTANTS from '../constants';

const { THEMES } = CONSTANTS;

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
      theme: THEMES.LIGHT,
    };
  }

  logOut = () => {
    this.setState({
      user: {},
    });
  };

  setTheme = (theme) => {
    this.setState({
      theme,
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          setTheme: this.setTheme,
        }}
      >
        <UserContext.Provider
          value={{
            user: this.state.user,
            logOut: this.logOut,
          }}
        >
          App
          <Tree />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
