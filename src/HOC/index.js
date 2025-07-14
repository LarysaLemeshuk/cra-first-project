import { ThemeContext } from '../contexts/themeContext';

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
