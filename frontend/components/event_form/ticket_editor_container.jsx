import { connect } from 'react-redux';
import TicketEditor from './ticket_editor';
import { createTicketType } from '../../actions/ticket_actions';


const mapStateToProps = (state, ownProps) => {
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createTicketType: ticketType => dispatch(createTicketType(ticketType)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketEditor);
