import React from 'react';

const HeaderList = ({ currentUser, logout }) => {
  if (typeof currentUser === 'undefined') {
    return (
      <ul className="header-list">
        <li><a href="#/signup">sign up</a></li>
        <li><a href="#/login">log in</a></li>
      </ul>
    )
  } else {
    return (
      <ul className="header-list">
        <li><a onClick={logout}>log out</a></li>
      </ul>
    )
  }
};

const Header = ({ currentUser, logout }) => (
  <header className="header">
    <nav className="header-nav">
      <div className="header-logo">
        <a href="#/">
          <img src="/assets/logo.png"/>
        </a>
      </div>

      <HeaderList currentUser={currentUser} logout={logout}/>
    </nav>
  </header>
);

export default Header;
