import React from 'react';
import { Link } from 'react-router';
import dateFormat from 'dateformat';

const MyEventsListItem = ({ myEvent }) => {
  const eventStarts = new Date(myEvent.start_date);
  eventStarts.setHours(...myEvent.start_time.split(":"));

  return (
    <div className="my-event-container">
      <div className="my-event-container-row">
        <div className="my-event-thumbnail">
          <img src={myEvent.image_url}/>
        </div>
        <div className="my-event-detail">
          <div className="my-event-detail-1">
            <p>{dateFormat(eventStarts, "ddd, mmm d @ h:MM TT")}</p>
            <p>{myEvent.title}</p>
          </div>
          <div className="my-event-detail-2">
            <p>{myEvent.venue_name}</p>
          </div>
        </div>
      </div>
      <div className="my-event-buttons-container">
        <Link to={`/events/${myEvent.id}/edit`}>
          <i className="material-icons">edit</i>
          <span>Edit</span>
        </Link>
        <Link to={`/events/${myEvent.id}`}>
          <i className="material-icons">open_in_browser</i>
            View
        </Link>
      </div>
    </div>
  );
};

const MyEventsList = ({ myEvents }) => {
  const myEventsIndex = myEvents.map(myEvent => {
    return <MyEventsListItem myEvent={myEvent} key={myEvent.id}/>;
  });

  return (
    <div>
      {myEventsIndex}
    </div>
  );
};

export default MyEventsList;
