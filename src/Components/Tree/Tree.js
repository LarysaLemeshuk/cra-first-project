import React from 'react';
import Parent from './Parent/Parent';
import style from './Tree.module.css';
import CONSTANTS from '../../constants';
import cx from 'classnames';
import { withTheme } from '../../HOC';

const { THEMES } = CONSTANTS;

const Tree = (props) => {
  const className = cx(style.container, {
    [style.lightTheme]: props.theme === THEMES.LIGHT,
    [style.darkTheme]: props.theme === THEMES.DARK,
  });
  return (
    <div className={className}>
      Tree
      <Parent />
    </div>
  );
};

// const TreeWithTheme = (props) => {
//   return (
//     <ThemeContext.Consumer>
//       {({ theme, setTheme }) => {
//         return <Tree theme={theme} setTheme={setTheme} />;
//       }}
//     </ThemeContext.Consumer>
//   );
// };

const TreeWithTheme = withTheme(Tree);

export default TreeWithTheme;
