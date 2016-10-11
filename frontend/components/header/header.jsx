import React from 'react';
import HeaderList from './header_list';

const Header = ({ currentUser, errors, logout, login, signup }) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo">
          <a href="#/">
            <img src="http://res.cloudinary.com/dldbslv2a/image/upload/v1476080437/eventbryte_logo_dcyqxa.png"/>
          </a>
        </div>

        <HeaderList currentUser={currentUser}
                    errors={errors}
                    logout={logout}
                    login={login}
                    signup={signup} />
      </nav>
    </header>
  );
};

export default Header;
