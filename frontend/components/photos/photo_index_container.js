import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { selectPhotos } from '../../reducers/selectors';
import { requestPhotos } from '../../actions/photo.js';

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
