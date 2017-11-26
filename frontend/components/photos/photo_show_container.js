import { connect } from 'react-redux';
import { requestPhoto } from '../../actions/photo';
import { selectPhotos } from '../../reducers/selectors';
import PhotoShow from './photo_show';

const mapStateToProps =  (state, props) => ({
  photos: selectPhotos(state, props.match.params.id),
  currentUser: state.session.currentUser
});
