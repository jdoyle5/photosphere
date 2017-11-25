import { connect } from 'react-redux';
import { login } from '../../actions/session';
import { signup } from '../../actions/session';
import Splash from './splash';
import { clearErrors } from '../../actions/errors';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(null, mapDispatchToProps)(Splash);
