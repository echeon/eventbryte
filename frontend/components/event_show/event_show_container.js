import { connect } from 'react-redux';
import EventShow from './event_show';
import { requestEvent } from '../../actions/event_actions';
import { selectEvent } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const eventId = parseInt(ownProps.params.eventId);
  const thisEvent = selectEvent(state.events, eventId);
  return {
    eventId,
    thisEvent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvent: id => dispatch(requestEvent(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
