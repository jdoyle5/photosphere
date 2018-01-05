import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo';
import PhotoForm from './photo_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createPhoto: (post) => dispatch(createPhoto(post)).then(() => history.push('/posts'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoForm);
