import { connect } from 'react-redux';
import ManageEvents from './manage_events';
import { updateFilter } from '../../actions/filter_actions';
import { requestEvents, destroyEvent } from '../../actions/event_actions';
import { selectMyEvents } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    events: selectMyEvents(state.events, state.session.currentUser.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
    destroyEvent: id => dispatch(destroyEvent(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageEvents);
