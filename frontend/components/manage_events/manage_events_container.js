import { connect } from 'react-redux';
import ManageEvents from './manage_events';
import { updateFilter } from '../../actions/filter_actions';
import { requestEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    filters: state.filters,
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageEvents);
