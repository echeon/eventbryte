import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { selectSavedEvents } from '../../reducers/selectors';
import { requestEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {
    currentUser,
    savedEvents: selectSavedEvents(state.events, currentUser.bookmarks)
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
)(UserProfile);
