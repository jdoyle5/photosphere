import { connect } from 'react-redux';
import { requestPhoto } from '../../actions/photo';
import PhotoShow from './photo_show';
import { requestComments } from '../../actions/comment';
import { requestTags } from '../../actions/tag';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId)),
  requestComments: photoId => dispatch(requestComments(photoId)),
  requestTags: photoId => dispatch(requestTags(photoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
