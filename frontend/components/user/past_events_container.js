import { connect } from 'react-redux';
import PastEvents from './past_events';
import { selectSavedEvents } from '../../reducers/selectors';
import { requestEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {
    currentUser,
    events: selectSavedEvents(state.events, currentUser.bookmarks),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PastEvents);
