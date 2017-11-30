import { connect } from 'react-redux';
import PhotoTagIndex from './photo_tag_index';
import { selectPhotos } from '../../reducers/selectors';
import { requestTagPhotos } from '../../actions/photo.js';

const mapStateToProps = state => ({
  photos: selectPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  requestTagPhotos: tagId => dispatch(requestTagPhotos(tagId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoTagIndex);
