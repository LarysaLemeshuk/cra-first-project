// TodoForm  - класова компонента
import React, { Component } from 'react';
import styles from './TodoFormStyle.module.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Створити відповідне поле у стейті, яке буде контролювати значення інпута
      taskText: '',
    };
  }

  // Обробник ончейнч для інпута, який буде змінювати стейт
  changeHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    const {
      props: { sendData },
      state: { taskText },
    } = this;

    event.preventDefault();
    sendData(taskText);

    this.setState({
        taskText:''
    })
  };

  render() {
    const { taskText } = this.state;
    return (
      <form onSubmit={this.submitHandler} className={styles.container}>
        <input
          type="text"
          value={taskText}
          name="taskText"
          onChange={this.changeHandler}
        />
        {/* Потрібно вказати, що value інпута контролюється стейтом*/}

        <button type="submit">Add task</button>
      </form>
    );
  }
}

export default TodoForm;
