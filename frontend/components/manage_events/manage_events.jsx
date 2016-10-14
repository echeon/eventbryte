import React from 'react';
import MyEventsList from './my_events_list';
import { Link } from 'react-router';

export default class ManageEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestEvents();
  }

  render() {
    const { events, destroyEvent } = this.props;

    if (!Object.keys(events).length) {
      return (
        <div className="my-events-container">
          <div className="my-events-header">
            <h1>Manage My Events</h1>
          </div>
          <hr/>
          <div className="empty-item-image-container">
            <img src="http://res.cloudinary.com/dldbslv2a/image/upload/v1476208504/no_saved_w750rw.png"/>
            <h4>You are not hosting any events.</h4>
            <Link to="/events/create">create event</Link>
          </div>
        </div>
      );
    }

    const myEvents = Object.keys(events).map(key => {
      return events[key];
    });

    return (
      <div className="my-events-container">
        <div className="my-events-header">
          <h1>Manage My Events</h1>
        </div>
        <hr/>
        <div className="my-events-list-container">
          <MyEventsList myEvents={myEvents}
                        destroyEvent={destroyEvent}/>
        </div>
      </div>
    );
  }
}
