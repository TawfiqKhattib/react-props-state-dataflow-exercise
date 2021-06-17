import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div>
        <p>{this.props.color} {this.props.type}</p>
      </div>
    )

  }
}

export default Article