import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <li className='user'>
        <p>Username: {this.props.user.username}</p>
        <p>Number of the Games Played: {this.props.showGamesPlayed ? this.props.user.numGames : '***' }</p>
      </li>
    )
  }
}
export default User
