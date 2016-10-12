import React from 'react';
import { connect } from 'react-redux';
import EventsList from './events_list';
import { requestEvents } from '../../actions/event_actions';
import { requestBookmarks } from '../../actions/bookmark_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    events: state.events,
    bookmarks: state.bookmarks,
    types: state.types,
    categories: state.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
    requestBookmarks: user => dispatch(requestBookmarks(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsList);
