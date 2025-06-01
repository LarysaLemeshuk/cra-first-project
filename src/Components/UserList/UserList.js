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

  renderUsers = () => {
    const { users } = this.state;
    return users.map((user) => <UserCard user={user} key={user.login.uuid} />);
  };

  clickHandler = () => {
    getUsers().then((data) => {
      const { results } = data;
      const tempArray = this.state.users;
      tempArray.push(results[0]);
      this.setState({
        users: tempArray,
      });
    });
  };

  render() {
    const { users } = this.state;

    return (
      <>
        <h1 className="">Users List</h1>
        <button onClick={() => this.clickHandler()}> Add user</button>
        <section className="card-container">
          {users.length ? this.renderUsers() : null}
        </section>
      </>
    );
  }
}

export default UserList;
