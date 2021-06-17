import React, { Component } from 'react';


class SubCompany extends Component {
  render() {
    return (
      <div>
         <h4>{this.props.name}  {this.props.revenue}</h4>
         
      </div>
    )

  }
}

export default SubCompany