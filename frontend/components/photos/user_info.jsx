import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoadingGraphic from '../loading-graphic';

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
    const { loading } = this.props;
    const { img_url, username } = this.props.user;
    if (loading) {
      return (
        <LoadingGraphic />
      );
    } else {
      return (
        <div className="user-profile-container">
          <img className="profile-img" src={img_url}/>
        <div className="profile-username">{username}</div>
        </div>
      );
    }
  }

}

export default UserInfo;
