import { connect } from 'react-redux';
import UserInfo from './user_info';
import { fetchUser } from '../../actions/user';

const mapStateToProps = (state) => ({
  user: state.entities.user,
  loading: state.ui.loading
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
