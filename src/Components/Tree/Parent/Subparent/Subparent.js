import React from 'react';
import Child from './Child/Child';
import { UserContext } from '../../../../contexts/userContext';
import CONSTANTS from '../../../../constants';
import { withTheme } from '../../../../HOC';

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

const SubParentWithThemeAndUser = (props) => {
  // компонента, яка займається загортанням в консьюмери
  return (
    <UserContext.Consumer>
      {({ user, logOut }) => {
        const SubparentThemed = withTheme(Subparent);
        return <SubparentThemed user={user} logOut={logOut} />;
      }}
    </UserContext.Consumer>
  );
};

export default SubParentWithThemeAndUser;
