import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session';
import Root from './components/root';
import { fetchPhotos,
         fetchPhoto,
         postPhoto,
         fetchUserPhotos } from './util/photo_api_util';

import { requestPhotos,
         requestPhoto,
         createPhoto,
         deletePhoto,
         requestUserPhotos } from './actions/photo';

import { requestComments,
         requestComment,
         deleteComment,
         postComment } from './actions/comment';


import { selectPhotos } from './reducers/selectors';
import { selectComments } from './reducers/selectors';


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
  // window.signup = signup;
  // window.login = login;
  window.logout = logout;
  // window.fetchPhotos = fetchPhotos;
  // window.fetchPhoto = fetchPhoto;
  // window.postPhoto = postPhoto;
  // window.fetchUserPhotos = fetchUserPhotos;
  // window.requestPhotos = requestPhotos;
  // window.requestPhoto = requestPhoto;
  // window.requestUserPhotos = requestUserPhotos;
  window.selectPhotos = selectPhotos;
  window.requestComments = requestComments;
  window.requestComment = requestComment;
  window.selectComments = selectComments;
  window.postComment = postComment;

  ////////////////
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
