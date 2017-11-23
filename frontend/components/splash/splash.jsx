import React from 'react';
import { AuthRoute } from '../../util/route_util';
import Modal from 'react-modal';
import { Image } from 'cloudinary-react';
import SessionFormContainer from '../session/session_form_container';

class Splash extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      modalOn: false,
      formChosen: ""
    };
  }

  // I found how to use the React Modal features from the following url:
  // http://elemental-ui.com/modal
  ////////////////////////////////////
  modalOpen(formChosen) {
    return () => {
      this.setState({
        modalOn: true,
        formChosen
      });
    };
  }

  modalClose() {
    return () => {
      this.setState({
        modalOn: false,
        formChosen: ""
      });
    };
  }

  render () {
    return (
      <div>
        <nav>
          <div>
            Photosphere
          </div>

          <div>
            <button onClick={() => this.modalOpen("login")}>Log In</button>
            <button onClick={() => this.modalOpen("signup")}>Sign Up</button>
          </div>
        </nav>

        <Modal
          isOpen={ this.state.modalOn }
          onCancel={ this.modalClose }
          backDropClosesModal={ true }
        >
          <SessionFormContainer
            formChosen={ this.state.formType }
          />
        </Modal>

        <div>
          <h1>Come share your memories with everyone</h1>
        <button>Demo</button>
        </div>
      </div>
    );
  }

}











//////////
