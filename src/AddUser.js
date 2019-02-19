import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {

  state = {
    user : {
      firstName: '',
      lastName: '',
      username: ''
    },
    userExists: false
  }

  contactExists = (newUsername) => {
    for (let user of this.props.users) {
      if (user.username === newUsername) {
        return true;
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const userExists = this.contactExists(this.state.user.username)

    if (!userExists) {
      this.props.onAddUser(this.state.user)
      this.setState({
        user : {
          firstName: '',
          lastName: '',
          username: ''
        }
      })
    }
    this.setState(() => ({
      userExists,
    }))
  }

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState(currentState => ({
      ...currentState,
      user: {
        ...currentState.user,
        [name]: value,
      },
    }))
  }

  render() {
    return (
      <div>
        <h2>Add New User:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='firstName'
            placeholder='Enter Your First Name'
            value={this.state.user.firstName}
            onChange={this.handleInput}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Enter Your Last Name'
            value={this.state.user.lastName}
            onChange={this.handleInput}
          />
          <input
            type='text'
            name='username'
            placeholder='Enter Your Username'
            value={this.state.user.username}
            onChange={this.handleInput}
          />
          <button disabled={this.state.user.firstName === '' || this.state.user.lastName === '' ||
            this.state.user.username === ''}
            >Add New User</button>
        </form>
        {this.state.userExists ? (
          <p className="error">A user already exists!</p>
        ) : (
          ''
        )}
      </div>
    )
  }
}

AddUser.propTypes = {
  users: PropTypes.array.isRequired,
  onAddUser: PropTypes.func.isRequired
}

export default AddUser
