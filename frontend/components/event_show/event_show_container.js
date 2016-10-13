import { connect } from 'react-redux';
import EventShow from './event_show';
import { requestEvent } from '../../actions/event_actions';
import { selectEvent } from '../../reducers/selectors';
import { requestTypes } from '../../actions/type_actions';
import { requestCategories } from '../../actions/category_actions';
import { destroyBookmark, createBookmark } from '../../actions/bookmark_actions';

const mapStateToProps = (state, ownProps) => {
  const eventId = parseInt(ownProps.params.eventId);
  const thisEvent = selectEvent(state.events, eventId);
  return {
    eventId,
    thisEvent,
    types: state.types,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvent: id => dispatch(requestEvent(id)),
    requestTypes: () => dispatch(requestTypes()),
    requestCategories: () => dispatch(requestCategories()),
    destroyBookmark: id => dispatch(destroyBookmark(id)),
    createBookmark: bookmark => dispatch(createBookmark(bookmark))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
