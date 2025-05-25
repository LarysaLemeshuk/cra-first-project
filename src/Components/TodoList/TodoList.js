import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        { id: 1, text: 'go to party' },
        { id: 2, text: 'meet friends' },
        { id: 3, text: 'have a walk' },
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

  renderLi() {
    const { todoList } = this.state;

    return todoList.map((task) => (
      <li key={task.id}>
        {task.text}
        <button
          onClick={() => {
            this.removeTask(task.id);
          }}
        >
          delete
        </button>
      </li>
    ));
  }

  render() {
    return (
      <>
        <h1>TODO LIST</h1>
        <ul>{this.renderLi()}</ul>
      </>
    );
  }
}

export default TodoList;

/*
задача 1
Створити компоненту todoList

Ця компонента має в стейті масив обʼєктів, в якому будуть знаходитись текст задачі та її id.
Приблизно це може виглядати ось таким чином:
[
{id: 1, text: 'go to party'},
 {id: 2, text: 'meet friends'}, 
 {id: 3, text: 'have a walk'}
]
Компонента рендерить список <li>, всередині якого один рядок з масиву
Приблизно це може виглядати ось таким чином:
<ul>
 <li>go to party</li>
 <li>meet friends</li> 
 <li>have a walk</li>
</ul>


*/
