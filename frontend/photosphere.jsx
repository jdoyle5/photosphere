import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
import { createNewUser } from './actions/session';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.createNewUser = createNewUser;
   ReactDOM.render(<h1>photosphere</h1>, root);
});
