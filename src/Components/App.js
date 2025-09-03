import React, { Component } from 'react';
import UserList from './HomeWork/UserList';
import {responseData} from './HomeWork/data'

class App extends Component {
  render() {
    return <UserList usersArray={responseData} />;
  }
}

export default App;