import { connect } from 'react-redux';
import { requestPhoto } from '../../actions/photo';
import PhotoShow from './photo_show';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
