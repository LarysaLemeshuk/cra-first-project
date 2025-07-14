import React from 'react';
import { withUser } from '../../../../../../HOC';

const Innerchild = (props) => {
  return (
    <div style={{ border: '1px solid blak' }}>
      I`m Inner Child
      <button onClick={props.logOut}> log out</button>
      <p>
        {props.firstName} {props.lastName} {props.email}
      </p>
    </div>
  );
};

export default withUser(Innerchild);
