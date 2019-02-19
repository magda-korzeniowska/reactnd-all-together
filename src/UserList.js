import React,  { Component } from 'react';
import User from './User.js';

class UserList extends Component {

  state = {
    showGamesPlayed: true
  }

  toggleScore = () => {
    this.setState((currentState) => ({
      showGamesPlayed: !currentState.showGamesPlayed
    }))
  }

  render() {

    const toggleButton = (
      <button className='smallButton' onClick={this.toggleScore}>
        {this.state.showGamesPlayed ? 'Hide the Number of Games Played' : 'Show the Number of Games Played'}
      </button>
    )

    return (
      <div>
        <h1>Users:</h1>
        {this.props.users.length > 0 ? toggleButton : ''}
        <ol>
          {this.props.users.map((user) => (
            <User
              key={user.username}
              user={user}
              showGamesPlayed={this.state.showGamesPlayed}
            />
          ))}
        </ol>
      </div>
    )
  }
}
export default UserList
