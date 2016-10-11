import React from 'react';
import { connect } from 'react-redux';
import BrowseEvents from './browse_events';
import { requestEvents, updateFilter } from '../../actions/event_actions.js';

const mapStateToProps = state => {
  return {
    events: state.events,
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseEvents);
