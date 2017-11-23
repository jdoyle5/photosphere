import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { createNewUser, login } from './actions/session';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TESTING STUFF
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createNewUser = createNewUser;
  window.login = login;
  ////////////////
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
