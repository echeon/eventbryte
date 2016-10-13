import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent, requestEvent, updateEvent } from '../../actions/event_actions';
import { requestTypes } from '../../actions/type_actions';
import { requestCategories } from '../../actions/category_actions';
import { selectEvent } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const eventId = parseInt(ownProps.params.eventId);
  const thisEvent = selectEvent(state.events, eventId);
  return {
    currentUser: state.session.currentUser,
    types: state.types,
    categories: state.categories,
    eventId,
    thisEvent
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname.endsWith("edit")) {
    return {
      formType: "edit",
      updateEvent: (id, thisEvent) => dispatch(updateEvent(id, thisEvent)),
      requestTypes: () => dispatch(requestTypes()),
      requestCategories: () => dispatch(requestCategories()),
      requestEvent: id => dispatch(requestEvent(id))
    };
  } else if (ownProps.location.pathname.endsWith("create")) {
    return {
      formType: "create",
      createEvent: thisEvent => dispatch(createEvent(thisEvent)),
      requestTypes: () => dispatch(requestTypes()),
      requestCategories: () => dispatch(requestCategories())
    };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
