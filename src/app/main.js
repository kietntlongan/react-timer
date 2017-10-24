import React from 'react';
import ReactDOM from 'react-dom';
import TimerExample from 'TimerExample.js';

ReactDOM.render(
  <TimerExample start={Date.now()} />,
  document.getElementById('app')
);
