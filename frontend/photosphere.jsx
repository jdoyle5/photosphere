import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
import { createNewUser, login } from './actions/session';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  const store = configStore();
  // TESTING STUFF
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createNewUser = createNewUser;
  window.login = login;
  ////////////////
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
