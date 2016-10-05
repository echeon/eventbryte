import React from 'react';
import HeaderList from './header_list';

const Header = ({ currentUser, errors, logout, login, signup }) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo">
          <a href="#/">
            <img src="/assets/logo.png"/>
          </a>
        </div>

        <HeaderList currentUser={currentUser}
                    logout={logout}
                    login={login}
                    signup={signup} />
      </nav>
    </header>
  );
};

export default Header;
