import { useContext } from 'react';
import Parent from './Parent/Parent';
import style from './Tree.module.css';
import CONSTANTS from '../../constants';
import cx from 'classnames';
import { ThemeContext } from '../../contexts/themeContext';


const { THEMES } = CONSTANTS;

const Tree = (props) => {
  const { theme } = useContext(ThemeContext);

  const className = cx(style.container, {
    [style.lightTheme]: theme === THEMES.LIGHT,
    [style.darkTheme]: theme === THEMES.DARK,
  });
  return (
    <div className={className}>
      Tree
      <Parent />
    </div>
  );
};

export default Tree;
