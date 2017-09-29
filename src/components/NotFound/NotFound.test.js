import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';

it('NotFound renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFound />, div);
});