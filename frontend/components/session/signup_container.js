import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

// Our setup component does not need to rely on our state, so we just need
// to pass down the action that we need to sign up a user.
// mapDispatchToProps will take in a dispatch and return a pojo with
// createNewUser which will take in a formUser, once it gets the form user
// We want it to dispatch createNewUser on our formUser
const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);
