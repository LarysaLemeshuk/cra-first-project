import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

const UserList = ({ usersArray }) => {
  return (
    <section className="users-list">
      {usersArray && usersArray.length > 0 ? (
        usersArray.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p className="no-users">Немає користувачів для відображення</p>
      )}
    </section>
  );
};

UserList.propTypes = {
  usersArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      profilePicture: PropTypes.string,
      contacts: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default UserList;
