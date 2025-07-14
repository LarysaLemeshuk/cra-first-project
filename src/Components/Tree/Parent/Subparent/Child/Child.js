import React from 'react';
import Innerchild from './Innerchild/Innerchild';
import { withUser } from '../../../../../HOC';
import styles from './Child.module.css';

const Child = (props) => {
    return (
        <div className={`${styles.border} ${styles.container}`}>
          Child
          <img
            className={styles.img}
            src={props.user.avatar}
            alt={`${props.user.firstname} ${props.user.lastName}`}
          ></img>
          <Innerchild />
        </div>
      );
};

export default withUser(Child);
