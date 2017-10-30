import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import 'jest-localstorage-mock';
it('Home renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});

it('knows that 2 and 2 make 4', () => {
  expect(2 + 2).toBe(4);
});

it('knows that 2 and 2 make 4', () => {
  expect(5 + 2).toBe(4);
});

it('knows that 2 and 2 make 4', () => {
  expect(2 + 2).toBe(4);
});

it('knows that 2 and 2 make 4', () => {
  expect(2 + 2).toBe(4);
});

it('knows that 2 and 2 make 4', () => {
  expect(2 + 2).toBe(4);
});