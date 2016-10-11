import React from 'react';
import EventsList from './events_list';

export default class BrowseEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestEvents();
  }

  componentWillMount() {
  }

  // To be added when adding filters
  // componentWillMount() {
  //   this.props.updateFilter('user_id', this.props.currentUser.id);
  // }

  render() {
    const events = Object.keys(this.props.events).map(key => {
      return this.props.events[key];
    });

    return (
      <div className="browse-events-container">
        <aside className="browse-events-filter">
          
        </aside>
        <div className="browse-events-list-container">
          <EventsList events={events} />
        </div>
      </div>
    );
  }
}
