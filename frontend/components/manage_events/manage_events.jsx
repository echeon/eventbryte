import React from 'react';
import MyEventsList from './my_events_list';

export default class ManageEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestEvents();
  }

  componentWillMount() {
    this.props.updateFilter('user_id', this.props.currentUser.id);
  }

  render() {
    const myEvents = Object.keys(this.props.events).map(key => {
      return this.props.events[key];
    });

    return (
      <div className="my-events-container">
        <div className="my-events-header">
          <h1>Manage My Events</h1>
        </div>
        <hr/>
        <div className="my-events-list-container">
          <MyEventsList myEvents={myEvents}
                        destroyEvent={this.props.destroyEvent}/>
        </div>
      </div>
    );
  }
}
