import React from 'react';
import HeaderContainer from './header/header_container';
import HomeScreen from './home_screen';
import LoginModal from './modals/login_modal';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <HomeScreen />
    {children}
    <LoginModal />
  </div>
);

export default App;
