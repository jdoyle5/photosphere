import React from 'react';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) { // We want to create a local state to keep track
    super(props);      // of all of the fields of our form
    this.state = {
      username: '',
      password: '',
      formChosen: props.formChosen
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navLink = this.navLink.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
    // this.handleGuestLogin = this.handleGuestLogin.bind(this);

    if (props.guestLogin) {
      this.loginGuest();
    } else if (this.state.formGuestLogin) {
      this.loginGuest();
    }

  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.formChosen === "Log In") {
      const formUser = {
        username: this.state.username,
        password: this.state.password
      };
      this.props.login(formUser);
    } else {
      const formUser = {
        username: this.state.username,
        password: this.state.password,
        img_url: "http://res.cloudinary.com/dn7nwtnr4/image/upload/v1514246424/Unknown_Person_wx5iar.png"
      };
      this.props.signup(formUser);
    }
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error: ${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  navLink() {
    if (this.state.formChosen === "Log In") {
      return (
        <a onClick={this.toggleForm}>Not a member? <b>Sign Up</b></a>
      );
    } else {
      return (
        <a onClick={this.toggleForm}>Already a member? <b>Log In</b></a>
      );
    }
  }

  toggleForm() {
    this.props.clearErrors();

    if (this.state.formChosen === "Sign Up") {
      this.setState({ formChosen: "Log In"});
    } else {
      this.setState({ formChosen: "Sign Up"});
    }
  }


  loginGuest() {
    const guestUsername = 'guest_user'.split('');
    const guestPassword = 'password'.split('');

    const intervalMain = setInterval(() => {
      if (guestUsername.length > 0) {
        this.setState({
          username: this.state.username + guestUsername.shift()
        });
      } else if (guestPassword.length > 0) {
        this.setState({
          password: this.state.password + guestPassword.shift()
        });
      } else {
        clearInterval(intervalMain);
        this.props.login(this.state);
      }
    }, 100);
  }

  render() {
    return (
      <div className="session-form-container">
        <h2>{this.state.formChosen}</h2>
      <form onSubmit={this.handleSubmit} className="form">
          {this.renderErrors()}
              <input type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                className="login-input"
                placeholder="username"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                className="login-input"
                placeholder="password"
              />
            <br/>
            <input type="submit" value="Submit" />
        </form>
        {this.navLink()}
        <a className="guest-login" onClick={this.loginGuest}>Login as <b>Guest</b></a>
      </div>
    );
  }

}

export default SessionForm;











///////////////
