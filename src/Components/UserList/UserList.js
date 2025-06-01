import React from 'react';
import UserCard from './UserCard';
import { getUsers } from '../../API';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    getUsers().then((data) => {
      const { results } = data;

      this.setState({
        users: results,
      });
    });
  }

  render() {
    const { users } = this.state;

    return (<>{users.length  ? <UserCard user={users[0]} /> : null}</>)
  }
}

export default UserList;
