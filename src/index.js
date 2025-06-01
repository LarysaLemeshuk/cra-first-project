import React from 'react';
import ReactDOM from 'react-dom/client';
import AlohaDashboard from './Components/App/AlohaDashboard/AlohaDashboard';
import TodoList from './Components/TodoList/TodoList';
import Scene from './Components/Scene/Scene';
import Counter from './Counter/Counter';
import CounterPage from './Counter/CounterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CounterPage/>);
