import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Counter from './Counter/CounterPage';
import UserList from './UserList/UserList';
import TodoList from './TodoList/TodoList';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="counter">Go to Counter component</Link>
          </li>
          <li>
            <Link to="users">Go to UserList component</Link>
          </li>
          <li>
            <Link to="todo">Go to TodoList component</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// 1. SSR (server-side rendering) - додатки, які рендеряться на сервері
// 2. CSR (client-side-rendering) - додатки, які рендеряться на клієнті
