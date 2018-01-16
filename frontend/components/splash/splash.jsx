import React from 'react';
import { AuthRoute } from '../../util/route_util';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOn: false,
      formChosen: "",
      guestLogin: false
    };
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
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

  handleGuestLogin() {
    this.setState({
      modalIsOpen: true,
      formChosen: "Log In",
      demoLogin: true
    });
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
            guestLogin={this.state.guestLogin}
          />
        </Modal>

        <div className="guest-div">
          <h1>Share your photos with the world.</h1>
        {/* <button onClick={() => this.props.login({
            username: "guest_user",
            password: "password"
          })}> */}
        <button onClick={this.handleGuestLogin}>
          Guest
        </button>
        </div>
      </div>
    );
  }

}

export default Splash;









//////////
