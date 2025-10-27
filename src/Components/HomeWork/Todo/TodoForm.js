import React, { Component } from 'react';
import * as yup from 'yup';
import styles from './TodoFormStyle.module.scss';
import cx from 'classnames';

const schema = yup.object().shape({
  taskText: yup
    .string()
    .trim()
    .required('Task is required')
    .min(3, 'Task must be at least 3 characters')
    .notOneOf(['*'], 'Symbol * is not allowed'),
});

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskText: '',
      isInputValid: true,
      error: '',
    };
  }

  changeHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
      error: '',
    });
  };

  submitHandler = async (event) => {
    event.preventDefault();
    const { sendData } = this.props;
    const { taskText } = this.state;

    try {
      await schema.validate({ taskText });
      sendData(taskText);
      this.setState({ taskText: '', error: '' });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  render() {
    const { taskText, error } = this.state;

    const className = cx(styles.input, {
      [styles.invalid]: !!error,
    });

    return (
      <form onSubmit={this.submitHandler} className={styles.container}>
        <input
          type="text"
          className={className}
          value={taskText}
          name="taskText"
          onChange={this.changeHandler}
          placeholder="Enter a task...."
        />
        <button type="submit">Add task</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    );
  }
}

export default TodoForm;
