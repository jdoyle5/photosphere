import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.match.params.userId);
    this.props.fetchUser(this.props.match.params.userId);
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.userId !== newProps.match.params.userId) {
  //     this.props.fetchUser(newProps.match.params.userId);
  //   }
  // }

  render() {
    return (
      <div>
        <img src={this.props.user.img_url}/>
        <div>{this.props.user.img_url}</div>
      </div>
    );
  }

}

export default UserInfo;
