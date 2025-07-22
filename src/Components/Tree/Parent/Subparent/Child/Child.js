import { useContext } from 'react';
import InnerChild from './InnerChild/InnerChild';
import styles from './Child.module.css';
import { UserContext } from '../../../../../contexts/userContext';

const Child = (props) => {
  const {
    user: { avatar, firstName, lastName },
  } = useContext(UserContext);
  return (
    <div className={styles.border}>
      Child
      <img
        className={styles.img}
        src={avatar}
        alt={`${firstName} ${lastName}`}
      ></img>
      <InnerChild />
    </div>
  );
};

export default Child;
