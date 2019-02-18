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

  render() {
    return (
      <div>
        <h2>Add New User</h2>

      </div>
    )
  }
}

export default AddUser
