import React from 'react';
import Innerchild from './Innerchild/Innerchild';
import { UserContext } from '../../../../../contexts/userContext';
import styles from './Child.module.css';

const Child = (props) => {
  return (
    <UserContext.Consumer>
      {({ user }) => {
        return (
          <div className={`${styles.border} ${styles.container}`}>
            Child
            <img
              className={styles.img}
              src={user.avatar}
              alt={`${user.firstname} ${user.lastName}`}
            ></img>
            <Innerchild />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Child;
