import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Main__Context } from './components/Main__Context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main__Context>
      <App/>
    </Main__Context>
  </React.StrictMode>
);

