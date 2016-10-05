import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
  }

  Modal.setAppElement(document.body);

  ReactDOM.render(<Root store={store} />, root);
});







// FOR TESTING ONLY!
window.store = configureStore();
import { signup, login, logout } from './actions/session_actions';
window.signup = signup;
window.login = login;
window.logout = logout;
window.user = {username: "guest", password: "password"};
