import { connect } from 'react-redux';
import UserInfo from './user_info';
import { fetchUser, createFollow, deleteFollow } from '../../actions/user';
import {
  fetchFollowers,
  fetchFollowees
} from '../../actions/follows';

const mapStateToProps = (state) => ({
  user: state.entities.user,
  loading: state.ui.loading,
  currentUser: state.session.currentUser,
  numFollows: state.entities.user.follows_count,
  numFollowing: state.entities.user.following_count,
  followed: state.entities.user.followed_by_current_user
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  createFollow: (userId, currentUserId) => dispatch(createFollow(userId, currentUserId)),
  deleteFollow: (userId, currentUserId) => dispatch(deleteFollow(userId, currentUserId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
