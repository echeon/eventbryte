import React from 'react';
import { connect } from 'react-redux';
import BrowseEvents from './browse_events';
import { requestTypes } from '../../actions/type_actions';
import { requestCategories } from '../../actions/category_actions';

const mapStateToProps = state => {
  return {
    types: state.types,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTypes: () => dispatch(requestTypes()),
    requestCategories: () => dispatch(requestCategories()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseEvents);
