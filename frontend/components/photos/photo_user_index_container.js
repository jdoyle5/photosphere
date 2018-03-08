import { connect } from 'react-redux';
import PhotoUserIndex from './photo_user_index';
import { selectPhotos } from '../../reducers/selectors';
import { requestUserPhotos } from '../../actions/photo.js';
import { clearComments } from '../../actions/comment';

const mapStateToProps = state => ({
  photos: selectPhotos(state),
  loading: state.ui.loading,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestUserPhotos: userId => dispatch(requestUserPhotos(userId)),
  clearComments: () => dispatch(clearComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUserIndex);
