import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errors';
import { selectComments } from '../../reducers/selectors';
import { requestComments, postComment } from '../../actions/comment';
import CommentForm from './comment_form';


const mapStateToProps = state => ({
  comments: selectComments(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestComments: (photoId) => dispatch(requestComments(photoId)),
  postComment: (comment) => dispatch(postComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
