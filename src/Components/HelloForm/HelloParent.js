/*

Задача (*)
Форма, яка вітається повинна бути всередині батьківської форми.
В батьківській формі зберігається імʼя користувача у стейті.
Тобто, форма у якій запитується імʼя користувача - дочірня форма.
Форма, у якій відображається вітання імʼя користувача - батьківська форма.
Дитина повинна передати батьку пате юзера, щоб він зміг з ним привітатися.


*/

import React from 'react';
import HelloForm from './HelloForm';

// батьківський компонент, який містить імʼя користувача

class HelloParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Anonim',
    };
  }

  getStateFromChild = (username) => {
    this.setState({
      name: username,
    });
  };

  render() {
    const { name } = this.state;

    return (
      <>
        <HelloForm sendUserNameToParent={this.getStateFromChild} />
        <p>{name}</p>
      </>
    );
  }
}

export default HelloParent;
