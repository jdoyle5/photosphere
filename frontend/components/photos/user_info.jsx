import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props.match.params.userId);
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.fetchUser(newProps.match.params.userId);
    }
  }

  render() {
    return (
      <div className="user-profile-container">
        <img className="profile-img" src={this.props.user.img_url}/>
        <div className="profile-username">{this.props.user.username}</div>
      </div>
    );
  }

}

export default UserInfo;
