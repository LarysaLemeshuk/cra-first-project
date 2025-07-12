import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const Innerchild = (props) => {
  //   const {
  //     user: { firsName, lastName, email, avatar } = {}} = props;
  return (
    <UserContext.Consumer>
      {({ user: { firstName, lastName, email, avatar }, logOut }) => {
        return (
          <div style={{ border: '1px solid blak' }}>
            I`m Inner Child
            <button onClick={logOut}> log out</button>
            <p>
              {firstName} {lastName} {email}
            </p>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Innerchild;
