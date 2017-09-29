import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';

it('Welcome renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Welcome />, div);
});