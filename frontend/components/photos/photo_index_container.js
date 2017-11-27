import { connect } from 'react-redux';
import { selectPhotos } from '../../reducers/selectors';
import { requestPhotos } from '../../actions/photo.js';
import PhotoIndex from './photo_index';

const mapStateToProps = state => ({
  photos: selectPhotos(state)
});

const mapDispatchToProps = dispatch => ({
    requestPhotos: () => dispatch(requestPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
