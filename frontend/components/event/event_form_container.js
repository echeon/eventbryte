import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';
import { requestTypes } from '../../actions/type_actions';
import { requestCategories } from '../../actions/category_actions';
// import { allTypes } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.events.errors,
    types: state.types,
    categories: state.categories
  };
  // types: allTypes(state)
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: singleEvent => dispatch(createEvent(singleEvent)),
    requestTypes: () => dispatch(requestTypes()),
    requestCategories: () => dispatch(requestCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
