import React from 'react';
import { connect } from 'react-redux';
import BrowseEvents from './browse_events';
import { requestTypes } from '../../actions/type_actions';
import { requestCategories } from '../../actions/category_actions';
import { requestEvents } from '../../actions/event_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return {
    events: state.events,
    types: state.types,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    requestEvents: () => dispatch(requestEvents()),
    requestTypes: () => dispatch(requestTypes()),
    requestCategories: () => dispatch(requestCategories()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseEvents);
