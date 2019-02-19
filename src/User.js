import React, { Component } from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  return (
    <li className='user'>
      <p>Username: {props.user.username}</p>
      <p>Number of the Games Played: {props.showGamesPlayed ? props.user.numGames : '***' }</p>
    </li>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  showGamesPlayed: PropTypes.bool.isRequired
}

export default User
