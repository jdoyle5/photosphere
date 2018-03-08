import { connect } from 'react-redux';
import { selectPhotos } from '../../reducers/selectors';
import { requestPhotos } from '../../actions/photo';
import { clearComments } from '../../actions/comment';
import { requestTags } from '../../actions/tag';
import PhotoIndex from './photo_index';

const mapStateToProps = state => ({
  photos: selectPhotos(state),
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
    requestPhotos: () => dispatch(requestPhotos()),
    clearComments: () => dispatch(clearComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
