import { ThemeContext } from '../contexts/themeContext';
import { UserContext } from '../contexts/userContext';

// Компонент вищого порядку (High Order Component, HOC) - функція, яка приймає компонент як аргумент і повертає новий компонент
export const withTheme = (Component) => (props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        return <Component theme={theme} setTheme={setTheme} {...props} />;
      }}
    </ThemeContext.Consumer>
  );
};

// Компонент вищого порядку (High Order Component, HOC) - функція, яка приймає компонент як аргумент і повертає новий компонент

export const withUser = (Component) => (props) => {
  return (
    <UserContext.Consumer>
      {({ user, logOut }) => {
        return <Component ser={user} logOut={logOut} {...props} />;
      }}
    </UserContext.Consumer>
  );
};
