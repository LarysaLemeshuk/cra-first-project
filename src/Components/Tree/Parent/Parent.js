import React from 'react';
import SubParentWithThemeAndUser from './Subparent/Subparent';
import styles from './Parent.module.css';

const Parent = (props) => {
  return (
    <div className={styles.container}>
      Parent
      <SubParentWithThemeAndUser />
    </div>
  );
};

export default Parent;
