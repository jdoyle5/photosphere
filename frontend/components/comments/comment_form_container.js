import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errors';
import { selectComments, selectTags } from '../../reducers/selectors';
import { requestComments,
         postComment, deleteComment } from '../../actions/comment';
import { requestTags } from '../../actions/tag';
import CommentForm from './comment_form';
import { likePhoto, unlikePhoto } from '../../actions/like';


const mapStateToProps = state => ({
  comments: selectComments(state),
  currentUser: state.session.currentUser,
  tags: selectTags(state),
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  requestComments: photoId => dispatch(requestComments(photoId)),
  requestTags: photoId => dispatch(requestTags(photoId)),
  postComment: comment => dispatch(postComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
  likePhoto: photoId => dispatch(likePhoto(photoId)),
  unlikePhoto: photoId => dispatch(unlikePhoto(photoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
