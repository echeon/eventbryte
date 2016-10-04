import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <h3>Welcome to BenchBnB, {currentUser.username}!</h3>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  } else {

    return (
      <div>
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    );
  }
};

export default Greeting;
