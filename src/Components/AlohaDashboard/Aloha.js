import React from 'react';

class Aloha extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 1. Створити змінну стейту( за аналогією з лампочкою)
      isGreeting: true,
    };
  }

  // 2. Зробити події кліку на h1 ( за аналогією з лампочкою)
  clickHandler() {
    this.setState({
      isGreeting: !this.state.isGreeting,
    });
  }

  // тут можуть бути обробники подій
  render() {
    // 3. В заледності від значення стейту, вирахувати що за текст ви показуєте ( за аналогією з лампочкою)

    const greetingText = this.state.isGreeting ? 'Hello' : 'Bye';

    return (
      <h1
        onClick={() => {
          this.clickHandler();
        }}
      >
        {' '}
        {greetingText} {this.props.firstName} {this.props.lastName}
      </h1>
    );

    // P.S  Не забудьте підписати обробник подій кліку, розроблений у п.2
  }
}

export default Aloha;

/*
Доробити компоненту таким чином, щоб за натисненням на h1 текст hello змінювався на bye
*/
