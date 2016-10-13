import React from 'react';
import EventItemContainer from './event_item_container';


export default class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { upcomingEvents, types, categories, tickets } = this.props;

    let upcomingEventsList = Object.keys(upcomingEvents).map(key => {
      const eventItem = upcomingEvents[key];

      const type = types[eventItem.type_id];
      const typeName = type ? type.name : "";

      const category = categories[eventItem.category_id];
      const categoryName = category ? category.name : "";

      let ticketId = 0;
      Object.keys(tickets).forEach(k => {
        if (tickets[k].event_id === eventItem.id) {
          ticketId = tickets[k].id;
        }
      });

      return <EventItemContainer formType="upcoming"
                                 key={key}
                                 eventItem={eventItem}
                                 typeName={typeName}
                                 categoryName={categoryName}
                                 helperId={ticketId} />;
    });

    if (typeof upcomingEvents[Object.keys(upcomingEvents)[0]] === 'undefined') {
      upcomingEventsList = <div className="myprofile-event-item"></div>;
    }

    return (
      <div className="myprofile-event-lists-container">
        {upcomingEventsList}
      </div>
    );
  }
}
