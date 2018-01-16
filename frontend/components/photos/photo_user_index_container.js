import { connect } from 'react-redux';
import PhotoUserIndex from './photo_user_index';
import { selectPhotos } from '../../reducers/selectors';
import { requestUserPhotos } from '../../actions/photo.js';

const mapStateToProps = state => ({
  photos: selectPhotos(state),
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  requestUserPhotos: userId => dispatch(requestUserPhotos(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUserIndex);
