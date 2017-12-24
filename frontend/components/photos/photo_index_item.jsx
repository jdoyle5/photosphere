import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import PhotoShowContainer from './photo_show_container';


class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOn: false
    };
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
  }

  modalOpen() {
    this.setState({
      modalOn: true
    });
  }

  modalClose() {
    this.setState({
      modalOn: false
    });
  }

  render() {
    const { photo } = this.props;
    return (
      <div>
        <div className="tile">
          <div className="username-display">
            <Link to={`/users/${photo.owner_id}/photos`}
              className="username">{photo.username}
            </Link>
          </div>
          <a onClick={() => this.modalOpen()}>
            <img key={photo.id} src={ photo.img_url }/>
          </a>
        </div>

        <Modal
          isOpen={ this.state.modalOn }
          onRequestClose={ this.modalClose }
          backDropClosesModal={ true }
          className={"modal-photo-show"}
          overlayClassName={"photo-show-overlay"}
          >
          <PhotoShowContainer photo={photo} modalClose={this.modalClose}/>

          <button className="close-modal-x">
          <i className="fa fa-times"
          onClick={ this.modalClose }
          aria-hidden="true"></i></button>

        </Modal>
      </div>
    );
  }

}

export default PhotoIndexItem;
















//////////
