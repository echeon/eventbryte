import React from 'react';
import { connect } from 'react-redux';
import EventItem from './event_item';
import { destroyBookmark, createBookmark } from '../../actions/bookmark_actions';

const mapDispatchToProps = dispatch => {
  return {
    destroyBookmark: id => dispatch(destroyBookmark(id)),
    createBookmark: bookmark => dispatch(createBookmark(bookmark))
  };
};


export default connect(
  null,
  mapDispatchToProps
)(EventItem);
