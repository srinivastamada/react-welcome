import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

it('Sidebar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar />, div);
});