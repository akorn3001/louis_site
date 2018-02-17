import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
// ReactDOM.render(
//   <App />, document.getElementById('root'));
// registerServiceWorker();


ReactDOM.render(
  <Root />, root);
registerServiceWorker();
