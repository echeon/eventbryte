import React from 'react';
import { Link } from 'react-router';
import dateFormat from 'dateformat';

const EventsListItem = ({ thisEvent }) => {
  const eventStarts = new Date(thisEvent.start_date);
  eventStarts.setHours(...thisEvent.start_time.split(":"));

  return (
    <div className="single-event-container">
      <div className="single-event-top-row">
        <div className="single-event-thumbnail">
          <img src={thisEvent.image_url}/>
        </div>
        <div className="single-event-detail">
          <div className="single-event-detail-1">
            <p>{dateFormat(eventStarts, "ddd, mmm d @ h:MM TT")}</p>
            <p>{thisEvent.title}</p>
          </div>
          <div className="single-event-detail-2">
            <p>{thisEvent.venue_name}</p>
          </div>
        </div>
      </div>
      <div className="single-event-bottom-row">
        <div className="single-event-price-info">
          FREE
        </div>
        <div className="single-event-others">
          <div className="single-event-tags">
            <a>#Party</a>
            <a>#Music</a>
          </div>
          <div className="bookmark-action">
            <i className="material-icons">bookmark_border</i>
          </div>
        </div>
      </div>
    </div>
  );
};
const EventsList = ({ events }) => {
  const eventsIndex = events.map(thisEvent => {
    return <EventsListItem thisEvent={thisEvent}
                           key={thisEvent.id}/>;
  });

  return (
    <div className="browse-results-container">
      {eventsIndex}
    </div>
  );
};

export default EventsList;
