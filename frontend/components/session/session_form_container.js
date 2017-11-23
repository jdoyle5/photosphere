import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => ({
  // const formChosen = location.pathname.slice(1);
  // const processForm = (formChosen === 'login') ? login : signup;
  // return {
  //   processForm: user => dispatch(processForm(user)),
  //   formChosen
  // };
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
