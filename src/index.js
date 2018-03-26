import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');

  ReactDOM.render(
    <Root />, root);
  registerServiceWorker();
});
