import React from 'react';
import EventItemContainer from './event_item_container';


export default class PastEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pastEvents, types, categories, tickets } = this.props;

    let pastEventsList = Object.keys(pastEvents).map(key => {
      const eventItem = pastEvents[key];

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

      return <EventItemContainer formType="past"
                                 key={key}
                                 eventItem={eventItem}
                                 typeName={typeName}
                                 categoryName={categoryName}
                                 helperId={ticketId} />;
    });

    if (typeof pastEvents[Object.keys(pastEvents)[0]] === 'undefined') {
      pastEventsList = <div className="myprofile-event-item"></div>;
    }

    return (
      <div className="myprofile-event-lists-container">
        {pastEventsList}
      </div>
    );
  }
}
