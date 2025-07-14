import React from 'react';
import Child from './Child/Child';
import { withTheme, withUser } from '../../../../HOC';
import CONSTANTS from '../../../../constants';

const { THEMES } = CONSTANTS;

const Subparent = (props) => {
  // тут ми фокусуємось на вирішенні нашої задачі, без хлам-кодуЮ типу консьюмерів
  const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  return (
    <div>
      Subparent
      <p>{props.user.firstName}</p>
      <button onClick={() => props.setTheme(nextTheme)}>
        Click to change theme
      </button>
      <Child />
    </div>
  );
};

// Огортаємо Subparent в контекст теми
const SubparentWithTheme = withTheme(Subparent);

// Огортаємо SubparentWithTheme в контекст User
const SubParentWithThemeAndUser = withUser(SubparentWithTheme);

export default SubParentWithThemeAndUser;
