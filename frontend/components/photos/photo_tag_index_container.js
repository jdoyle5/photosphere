import { connect } from 'react-redux';
import PhotoTagIndex from './photo_tag_index';
import { selectPhotos } from '../../reducers/selectors';
import { requestTagPhotos } from '../../actions/photo.js';
import { clearComments } from '../../actions/comment';

const mapStateToProps = state => ({
  photos: selectPhotos(state),
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  requestTagPhotos: tagId => dispatch(requestTagPhotos(tagId)),
  clearComments: () => dispatch(clearComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoTagIndex);
