import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.js';

ReactDOM.render(
  <App start={Date.now()} />,
  document.getElementById('app')
);
