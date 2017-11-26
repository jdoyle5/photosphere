import React from 'react';
import { AuthRoute } from '../../util/route_util';
import Modal from 'react-modal';
// import { Image } from 'cloudinary-react';
import SessionFormContainer from '../session/session_form_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOn: false,
      formChosen: ""
    };
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
  }

  modalOpen(formChosen) {
    this.setState({
      modalOn: true,
      formChosen
    });
  }

  modalClose() {
    this.setState({
      modalOn: false,
      formChosen: ""
    });
    this.props.clearErrors();
  }

  render () {
    return (
      <div className="splash-all">
        <nav className="splash-top">
          <div className="splash-photosphere">
            Photosphere
          </div>

          <div className="splash-top-right">
            <a onClick={() => this.modalOpen("Log In")}>Log In</a>
            <a onClick={() => this.modalOpen("Sign Up")}>Sign Up</a>
          </div>
        </nav>

        <Modal
          isOpen={ this.state.modalOn }
          onRequestClose={ this.modalClose }
          backDropClosesModal={ true }
          className={"modal"}
          overlayClassName={"modal-overlay"}
          >
          <button onClick={ this.modalClose }>
            X
          </button>

          <SessionFormContainer
            formChosen={ this.state.formChosen }
          />
        </Modal>

        <div className="guest-div">
          <h1>Dare to explore.</h1>
        <button onClick={() => this.props.login({
            username: "guest",
            password: "password"
          })}>
          Guest
        </button>
        </div>
      </div>
    );
  }

}

export default Splash;









//////////
