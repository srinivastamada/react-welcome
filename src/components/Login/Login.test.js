import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import 'jest-localstorage-mock';

it('Login renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});


it('knows that 2 and 2 make 4', () => {
  expect(2 + 2).toBe(4);
});