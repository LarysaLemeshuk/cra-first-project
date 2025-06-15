import React from 'react';
import UserCard from './UserCard';
import { getUsers } from '../../API';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      userCount: 100,
    };
  }

  componentDidMount() {
    const { userCount } = this.state;

    getUsers(userCount).then((data) => {
      const { results } = data;

      this.setState({
        users: results,
      });
    });
  }

  renderUsers = () => {
    const { users, filteredUsers } = this.state;
    return filteredUsers.length > 0
      ? filteredUsers.map((user) => (
          <UserCard user={user} key={user.login.uuid} />
        ))
      : users.map((user) => <UserCard user={user} key={user.login.uuid} />);
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

  handleSearcg = (event) => {
    const {
      target: { value: searchValue },
    } = event;
    const { users } = this.state;
    // 1
    // якщо в інпутику нічого немає, то чистимо маисв відфільтррованих юзерів
    if (searchValue === '') {
      this.setState({
        filteredUsers: [],
      });
      return;
    }

    // 2
    // Фільтруємо по прізвищу

    const filteredUsers = users.filter(
      (user) =>
        user.name.last.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );

    // 3
    // Кладемо в стейт відфільтрованих юзерів
    this.setState({
      filteredUsers,
    });
  };

  handelSetUserCount = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      userCount: value,
    });
  };

  handleLoadUsersClick = () => {
    const { userCount } = this.state;

    getUsers(userCount).then((data) => {
      const { results } = data;

      const tempArray = this.state.users;
      results.forEach((user) => {
        tempArray.push(user);
      });

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

        <input
          type="number"
          min={1}
          max={500}
          onChange={this.handelSetUserCount}
        />
        <button onClick={this.handelLoadUsersClick}>Load users</button>
        <input
          type="text"
          placeholder="Search by lastname"
          onChange={this.handleSearcg}
        />
        <button onClick={() => this.clickHandler()}> Add user</button>
        <section className="card-container">
          {users.length ? this.renderUsers() : <h2> Users loading....</h2>}
        </section>
      </>
    );
  }
}

export default UserList;

/*


Реалізувати таку логіку, шоб за замовчуванням ми пдвантажували 100 користувачів

Отримуємо спиок користувачів з БД (randomuser.me)
Зробити інпутик завдяки якому можна буде фільтрувати користувачів за прізвищем

Додаткове завдання
Зробити ще одинінпут з кнопкою де можна вказати яку кількість користувачів ви маєте підгрузити


*/
