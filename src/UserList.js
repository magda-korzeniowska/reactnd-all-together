import React,  { Component } from 'react';
import User from './User.js';

class UserList extends Component {

  state = {
    showGamesPlayes: true
  }

  render() {
    return (
      <div>
        <h1>Users:</h1>
        <ol>
          {this.props.users.map((user) => (
            <User key={user.username} user={user}/>
          ))}
        </ol>
      </div>
    )
  }
}
export default UserList
