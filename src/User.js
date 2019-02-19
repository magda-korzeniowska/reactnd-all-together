import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <li>
        <p>Username: {this.props.user.username}</p>
        {/* <p>Number of the Games Played: {this.props.showGamesPlayed ? .... }</p> */}
      </li>
    )
  }
}
export default User
