import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/events_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.events.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: singleEvent => dispatch(createEvent(singleEvent))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
