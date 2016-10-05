import React from 'react';
import HeaderContainer from './header/header_container';
import HomeScreen from './home/home_screen';

const App = ({ children }) => {
  return (
    <div>
      <HeaderContainer />
      <HomeScreen />
      {children}
    </div>
  );
};

export default App;
