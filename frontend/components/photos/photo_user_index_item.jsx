import React from 'react';
import Modal from 'react-modal';
import PhotoShowContainer from './photo_show_container';

class PhotoUserIndexItem extends React.Component {
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
    debugger;
    const { photo } = this.props;
    return (
      <div>
        <div className="tile">
          {/* <div className="photo-index-item-desc">
            <Link to={`/users/${photo.owner_id}/photos`}
              className="username">{photo.owner}
            </Link>
          </div> */}
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
          {/* <button onClick={ this.modalClose }>
            X
          </button> */}

          <PhotoShowContainer photo={photo}/>
        </Modal>
      </div>
    );
  }

}

export default PhotoUserIndexItem;
