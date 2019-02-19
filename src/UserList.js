import React,  { Component } from 'react';

class UserList extends Component {

  state = {
    showGamesPlayes: true
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ol>
          {this.props.users.map((user) => (
            <User />
          ))}
        </ol>
      </div>
    )
  }
}
export default UserList
