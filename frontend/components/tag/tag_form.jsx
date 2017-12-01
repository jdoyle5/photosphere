import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const formComment = this.state;
    if(this.state.body) {
      this.props.postComment(formComment).then(this.setState({name: ""}));
    }
  }

  render () {
    return (
      <div className="comment-form-container">
        <form onSubmit={this.handleSubmit} className="comment-form">
          <div className="comment-div">
            <input type="text"
              value={this.state.body}
              onChange={this.handleInput('body')}
              placeholder="Add a comment..."
            />
          </div>
        </form>
      </div>
    );
  }

}
