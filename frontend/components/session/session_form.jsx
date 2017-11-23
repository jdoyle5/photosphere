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
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const formUser = {
      username: this.state.username,
      password: this.state.password
    };
    if(this.state.formChosen === "login") {
      this.props.login(formUser);
    } else {
      this.props.signup(formUser);
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error: ${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  navLink() {
    if (this.state.formChosen === "login") {
      return (
        <a onClick={() => this.setState({ formChosen: "signup" })}>Sign Up</a>
      );
    } else {
      return (
        <a onClick={() => this.setState({ formChosen: "login" })}>Log In</a>
      );
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <h2>{this.state.formChosen}</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
        {this.navLink()}
      </div>
    );
  }

}

export default SessionForm;











///////////////
