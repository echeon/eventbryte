import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <h1>EVENTBRYTE</h1>
    <GreetingContainer />
    {children}
    <a href="http://localhost:3000/#">HOME</a>
  </div>
);

export default App;
