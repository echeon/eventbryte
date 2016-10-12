import { connect } from 'react-redux';
import SavedEvents from './saved_events';
import { selectSavedEvents } from '../../reducers/selectors';
import { requestEvents } from '../../actions/event_actions';
import { requestTypes } from '../../actions/type_actions';
import { requestCategories } from '../../actions/category_actions';
import { requestBookmarks } from '../../actions/bookmark_actions';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {
    currentUser,
    types: state.types,
    categories: state.categories,
    bookmarks: state.bookmarks,
    savedEvents: selectSavedEvents(state.events, state.bookmarks),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
    requestBookmarks: user => dispatch(requestBookmarks(user)),
    requestTypes: () => dispatch(requestTypes()),
    requestCategories: () => dispatch(requestCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedEvents);
