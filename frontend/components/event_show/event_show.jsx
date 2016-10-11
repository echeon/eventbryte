import React from 'react';
import EventDetail from './event_detail';

export default class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestEvent(this.props.eventId);
  }

  render() {
    return (
      <main className="event-show-container">
        <div className="event-show-header-image">
          <img src={this.props.thisEvent.image_url}/>
        </div>
        <EventDetail thisEvent={this.props.thisEvent} />
      </main>
    );
  }
}
