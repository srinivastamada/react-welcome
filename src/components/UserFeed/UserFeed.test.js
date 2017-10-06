import React from 'react';
import ReactDOM from 'react-dom';
import UserFeed from './UserFeed';

it('UserFeed renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserFeed />, div);
});