
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/home';
import '../styles/index.css';

let seconds = 0;

const renderApp = () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.render(<Home seconds={seconds} />, rootElement);
    seconds += 1;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  setInterval(renderApp, 1000);
});