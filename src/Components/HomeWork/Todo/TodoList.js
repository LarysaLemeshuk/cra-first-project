import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import styles from './TodoListStyle.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        { id: 1, text: 'go to party', done: false },
        { id: 2, text: 'meet friends', done: false },
        { id: 3, text: 'have a walk', done: false },
      ],
    };
  }

  removeTask(taskIdToRemove) {
    const { todoList } = this.state;

    const filteredArray = todoList.filter((task) => task.id !== taskIdToRemove);

    this.setState({
      todoList: filteredArray,
    });
  }

  formHandler = (text) => {
    const { todoList } = this.state;
    const newObj = {
      id: todoList.length + 1,
      text,
      done: false,
    };
    const newArr = [...todoList, newObj];
    this.setState({
      todoList: newArr,
    });
  };

  toggleDone = (id) => {
    this.setState(
      (prev) => {
        const updatedList = prev.todoList.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        );
        return { todoList: updatedList };
      },
      () => {
        const completedCount = this.state.todoList.filter(
          (task) => task.done
        ).length;
        if (completedCount === 5) {
          toast.success('You did a great job today! 💪', {
            position: 'top-center',
            autoClose: 3000,
          });
        }
      }
    );
  };

  renderLi() {
    const { todoList } = this.state;

    return todoList.map((task) => (
      <TodoItem
        key={task.id}
        text={task.text}
        id={task.id}
        done={task.done}
        delCallback={() => {
          this.removeTask(task.id);
        }}
        toggleCallback={() => this.toggleDone(task.id)}
      />
    ));
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>TODO LIST</h1>
        <TodoForm sendData={this.formHandler} />

        <ul className={styles.container}>{this.renderLi()}</ul>
        <ToastContainer />
      </div>
    );
  }
}

export default TodoList;
