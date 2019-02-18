import React, { Component } from 'react';

class AddUser extends Component {

  state = {
    user : {
      firstName: '',
      lastName: '',
      userName: ''
    },
    userExists: false
  }

  contactExists = (newUsername) => {
    for (let user of this.props.users) {
      if (user.userName === newUsername) {
        return true;
      } else {
        return false;
      }
    }
  }

  render() {
    return (
      <div>
        <h2>Add New User:</h2>
        <form>
          <input
            type='text'
            name='firstName'
            placeholder='Enter Your First Name'
            value={this.state.user.firstName}
            // onChange={}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Enter Your Last Name'
            value={this.state.user.lastName}
            // onChange={}
          />
          <input
            type='text'
            name='userName'
            placeholder='Enter Your Username'
            value={this.state.user.userName}
            // onChange={}
          />
        </form>

      </div>
    )
  }
}

export default AddUser
