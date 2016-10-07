import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import EventFormContainer from './event_form/event_form_container';
import HomeScreen from './home/home_screen';
import EventShowContainer from './event_show/event_show_container';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/login');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeScreen}/>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/events/create" component={EventFormContainer} onEnter={_redirectIfNotLoggedIn} />
          <Route path="/events/:eventId" component={EventShowContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
