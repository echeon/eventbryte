import React from 'react';
import EventItemContainer from './event_item_container';

export default class EventsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.requestBookmarks(this.props.currentUser);
    }
  }

  render() {
    const { types, categories, bookmarks, currentUser } = this.props;

    const events = Object.keys(this.props.events).map(key => {
      return this.props.events[key];
    });

    if (!events.length) {
      return <div className="no-events"><h1>No Events</h1></div>;
    }

    const eventsIndex = events.map(thisEvent => {
      const type = types[thisEvent.type_id];
      const typeName = type ? type.name : "";

      const category = categories[thisEvent.category_id];
      const categoryName = category ? category.name : "";

      let bookmarkId = 0;
      Object.keys(bookmarks).forEach(key => {
        if (bookmarks[key].event_id === thisEvent.id) {
          bookmarkId = bookmarks[key].id;
        }
      });

      return <EventItemContainer thisEvent={thisEvent}
                                 key={thisEvent.id}
                                 typeName={typeName}
                                 categoryName={categoryName}
                                 bookmarkId={bookmarkId} />;
    });

    return (
      <div className="browse-results-container">
        {eventsIndex}
      </div>
    );
  }
}
