import { connect } from 'react-redux';
import { login } from '../../actions/session';
import { signup } from '../../actions/session';
import Splash from './splash';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});

export default connect(null, mapDispatchToProps)(Splash);
