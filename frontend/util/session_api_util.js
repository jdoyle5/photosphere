//Sign up a user
// This will call the create user in the users controller which will
// create a new user in our database then send that promise back to us
// in the form of the user object.
export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user } // object nested under the keyword of user
  })
);

// Log in a user
// This will create a new session from our create method in our sessions
// controller, which will login the user and then send that specific user
// back from the database so that we can use it.
export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
);

//Log out a user
export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);
