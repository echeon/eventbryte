import { connect } from 'react-redux';
import UpcomingEvents from './upcoming_events';
import { selectUpcomingEvents } from '../../reducers/selectors';
import { requestEvents } from '../../actions/event_actions';
import { requestTypes } from '../../actions/type_actions';
import { requestCategories } from '../../actions/category_actions';
import { requestTickets } from '../../actions/ticket_actions';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {
    currentUser,
    types: state.types,
    categories: state.categories,
    tickets: state.tickets,
    upcomingEvents: selectUpcomingEvents(state.events, state.tickets),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
    requestTickets: user => dispatch(requestTickets(user)),
    requestTypes: () => dispatch(requestTypes()),
    requestCategories: () => dispatch(requestCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingEvents);
