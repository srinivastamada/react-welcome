import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('Header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});