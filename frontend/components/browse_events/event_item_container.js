import React from 'react';
import { connect } from 'react-redux';
import EventItem from './event_item';
import { destroyBookmark, createBookmark } from '../../actions/bookmark_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    destroyBookmark: id => dispatch(destroyBookmark(id)),
    createBookmark: bookmark => dispatch(createBookmark(bookmark))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventItem);
