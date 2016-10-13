import React from 'react';
import EventItemContainer from './event_item_container';


export default class SavedEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { savedEvents, types, categories, bookmarks } = this.props;
    
    let savedEventsList = Object.keys(savedEvents).map(key => {
      const eventItem = savedEvents[key];

      const type = types[eventItem.type_id];
      const typeName = type ? type.name : "";

      const category = categories[eventItem.category_id];
      const categoryName = category ? category.name : "";

      let bookmarkId = 0;
      Object.keys(bookmarks).forEach(k => {
        if (bookmarks[k].event_id === eventItem.id) {
          bookmarkId = bookmarks[k].id;
        }
      });

      return <EventItemContainer formType="bookmark"
                                 key={key}
                                 eventItem={eventItem}
                                 typeName={typeName}
                                 categoryName={categoryName}
                                 helperId={bookmarkId} />;
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
