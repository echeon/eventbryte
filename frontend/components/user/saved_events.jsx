import React from 'react';
import EventItem from './event_item';


export default class SavedEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTypes();
    this.props.requestCategories();
  }

  render() {
    const { savedEvents, types, categories } = this.props;

    let savedEventsList = Object.keys(savedEvents).map(key => {
      return <EventItem key={key}
                        eventItem={savedEvents[key]}
                        types={types}
                        categories={categories} />;
    });

    if (typeof savedEvents[Object.keys(savedEvents)[0]] === 'undefined') {
      savedEventsList = <div className="myprofile-event-item"></div>;
    }

    return (
      <div className="myprofile-event-lists-container">
        {savedEventsList}
      </div>
    );
  }
}
