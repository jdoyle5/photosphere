import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoadingGraphic from '../loading-graphic';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numFollows: this.props.numFollows,
      numFollowing: this.props.numFollowing
    };
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.fetchUser(newProps.match.params.userId);
    }
  }

  toggleFollow(e) {
    e.preventDefault();
    const follow = this.props.followed;
    if (follow) {
      return this.props.deleteFollow(this.props.user.id, this.props.currentUser.id);
    } else {
      return this.props.createFollow(this.props.user.id, this.props.currentUser.id);
    }
  }

  toggleFollowButton(){
    const followedButton = <button className="following" onClick={this.toggleFollow}>Following</button>;
    const notFollowedButton = <button className="follow" onClick={this.toggleFollow}>Follow</button>;
    if (this.props.user.id !== this.props.currentUser.id) {
      return (this.props.followed) ? followedButton : notFollowedButton;
    } else {
      return <button className="empty-button">Edit Profile</button>;
    }
  }

  follows(){
    if (this.props.numFollows > 1) {
      return 'followers';
    } else if (this.props.numFollows === 0) {
      return 'followers';
    } else {
      return 'follower';
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
          <div className="profile-section">
            <div className="profile-top-row">
              <div className="profile-username">{username}</div>
              <div>{this.toggleFollowButton()}</div>
            </div>
            <div className="profile-numbers">
              {/* <div className="num=posts"><strong>{this.props.numPosts}</strong>&nbsp;&nbsp;{this.posts()}</div> */}
              <div className="num-follows-divs">
                <div className="num-followers"><strong>{this.props.numFollows}</strong></div>
              <div className="follows-string">&nbsp;&nbsp;{this.follows()}</div>
              </div>
              <div className="num-follows-divs">
                <div className="num-following"><strong>{this.props.numFollowing}</strong></div>
              <div className="following-string">&nbsp;&nbsp;following</div>
              </div>
            </div>
            <div className="profile-blurb">
              <div className="user-fullname">{this.props.user.name}</div>
              {/* <div className="user-blurb">{this.props.user.blurb}</div> */}
            </div>
          </div>
      </div>
      );
    }
  }

}

export default UserInfo;
