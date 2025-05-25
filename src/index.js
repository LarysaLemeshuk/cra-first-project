import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import Greeting from './Components/App/Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Greeting name="Alex" />
    <Greeting name="John" />
    <Greeting name="Simon" />
    <Greeting name="Draco" />
    <Greeting name="Jane" />
  </>
);
