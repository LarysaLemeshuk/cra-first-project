import React from 'react';
import styles from './TodoItemStyle.module.scss';
import cx from 'classnames';

function TodoItem(props) {
  const { text, done, delCallback, toggleCallback } = props;

  const itemClass = cx(styles.item, {
    [styles.done]: done,
  });

  return (
    <li className={itemClass}>
      <span onClick={toggleCallback} className={styles.text}>
        {text}
      </span>
      <button onClick={delCallback} className={styles.deleteBtn}>
        x
      </button>
    </li>
  );
}

export default TodoItem;
