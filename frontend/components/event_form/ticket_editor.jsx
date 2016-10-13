import React from 'react';

export default class TicketEditor extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddFreeTicket = this.handleAddFreeTicket.bind(this);
    this.handleAddPaidTicket = this.handleAddPaidTicket.bind(this);

  }

  handleAddFreeTicket(e) {
    e.preventDefault();
  }

  handleAddPaidTicket(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="tickets-container">
        <div className="tickets-actions">
          <button onClick={this.handleAddFreeTicket}>
            <span>+</span>Free Ticket
          </button>
          <button onClick={this.handleAddPaidTicket}>
            <span>+</span>Paid Ticket
          </button>
        </div>
      </div>
    );
  }
}
