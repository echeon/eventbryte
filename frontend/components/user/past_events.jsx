import React from 'react';
import EventItemContainer from './event_item_container';
import { Link } from 'react-router';

export default class PastEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pastEvents, types, categories, tickets } = this.props;

    if (!Object.keys(pastEvents).length) {
      return (
        <div className="empty-item-image-container">
          <img src="http://res.cloudinary.com/dldbslv2a/image/upload/v1476208494/no_tickets_zgrvlo.png"/>
          <h4>You have no past events.</h4>
          <Link to="/browse">discover events</Link>
        </div>
      );
    }

    let pastEventsList = Object.keys(pastEvents).map(key => {
      return pastEvents[key];
    });

    pastEventsList.sort((eventA, eventB) => {
      return eventA.start_date > eventB.start_date ? -1 : 1;
    });

    pastEventsList = pastEventsList.map(eventItem => {
      if (eventItem) {
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
                                   key={eventItem.id}
                                   eventItem={eventItem}
                                   typeName={typeName}
                                   categoryName={categoryName}
                                   helperId={ticketId} />;
      }
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
