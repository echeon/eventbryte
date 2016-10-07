import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';
import { requestTypes } from '../../actions/type_actions';
import { requestCategories } from '../../actions/category_actions';
import { allTypes } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    types: allTypes(state),
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: thisEvent => dispatch(createEvent(thisEvent)),
    requestTypes: () => dispatch(requestTypes()),
    requestCategories: () => dispatch(requestCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
