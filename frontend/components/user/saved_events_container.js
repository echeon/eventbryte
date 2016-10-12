import { connect } from 'react-redux';
import SavedEvents from './saved_events';
import { selectSavedEvents } from '../../reducers/selectors';
import { requestTypes } from '../../actions/type_actions';
import { requestCategories } from '../../actions/category_actions';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {
    currentUser,
    savedEvents: selectSavedEvents(state.events, currentUser.bookmarks),
    types: state.types,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTypes: () => dispatch(requestTypes()),
    requestCategories: () => dispatch(requestCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedEvents);
