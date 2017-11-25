import {
  postUser,
  postSession,
  deleteSession} from '../util/session_api_util';
  import { clearErrors } from './errors';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// We need to return a pojo with a type and some kind of payload so we
// use these action creators
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
////////////////////////////////////////////////////////////

// Take in a user object from a form (formUser) and then curry and receive
// dispatch from our thunk middleware, once it receives the dispatch, we
// want it to call our postUser method with our formUser that we received
// from the form. The postUser is an ajax request that will return a
// promise with a user object. Then we want to dispatch our action
// creator by invokingthe dispatch on the receiveCurrentUser
// This is for signing in...
export const signup = formUser => dispatch => (
  postUser(formUser).then(user => {
    dispatch(receiveCurrentUser(user));
    dispatch(clearErrors());
  },
    err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

// This one is for logging in. We get the user from the form,
export const login = formUser => dispatch => (
  postSession(formUser).then(user => {
    dispatch(receiveCurrentUser(user));
    dispatch(clearErrors());
  },
    err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

// Log a user out, when we call deleteSession, it will send an ajax request
// to call a delete on our current user session token, which will log
// out the user (reset our current user session token and set
// session[session token] equal to nil), then we want to dispatch our logout
// current user action.
export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));
