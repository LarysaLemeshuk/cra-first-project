import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { HashLoader } from 'react-spinners';
import { getUsers } from '../../API';

const NewUserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userCount, setUserCount] = useState(100);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  const loadPage = (options = {}) => {
    getUsers(userCount)
      .then((data) => {
        const { results } = data;
        setUsers(results);
      })
      .catch((error) => {
        setIsError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadPage(page);
  }, [page]);

  const renderUsers = () => {
    return filteredUsers.length > 0
      ? filteredUsers.map((user) => (
          <UserCard user={user} key={user.login.uuid} />
        ))
      : users.map((user) => <UserCard user={user} key={user.login.uuid} />);
  };

  const handleSearcg = (event) => {
    const {
      target: { value: searchValue },
    } = event;

    // 1
    // якщо в інпутику нічого немає, то чистимо маисв відфільтррованих юзерів
    if (searchValue === '') {
      setFilteredUsers([]);
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
    setFilteredUsers(filteredUsers);
  };

  const handleSetUserCount = (event) => {
    const {
      target: { value },
    } = event;
    setUserCount(value);
  };
  const prevBtnHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextBtnHandler = () => {
    setPage(page + 1);
  };

  const clickHandler = () => {
    getUsers(1, page + 50).then((data) => {
      const { results } = data;
      setUsers(prevUsers => [...prevUsers, results[0]]);
    });
  };

  return (
    <>
      <h1 className="header-text">Users List</h1>

      <input type="number" min={1} max={300} onChange={handleSetUserCount} />

      <button onClick={() => loadPage()}>Load users</button>

      <input
        type="text"
        placeholder="Search by lastname"
        onChange={handleSearcg}
      />

      <button onClick={() => clickHandler()}> Add user</button>

      {isLoading && (
        <HashLoader
          color="#36d7b7"
          size={500}
          cssOverride={{ display: 'block', margin: '0 auto' }}
        />
      )}
      {isError && <h2>{isError.message}</h2>}

      <button onClick={prevBtnHandler}>Previous page</button>
      <button onClick={nextBtnHandler}>Next page</button>

      <section className="card-container">
        {users.length ? renderUsers() : null}
      </section>
    </>
  );
};

export default NewUserList;
