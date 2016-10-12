import React from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router';

const EventItem = ({ eventItem, types, categories }) => {
  const type = types[eventItem.type_id];
  const typeName = type ? type.name : "";

  const category = categories[eventItem.category_id];
  const categoryName = category ? category.name : "";

  const eventStarts = new Date(eventItem.start_date);
  eventStarts.setHours(...eventItem.start_time.split(":"));

  return (
    <div className="myprofile-event-item">
      <Link to={`events/${eventItem.id}`} className="myprofile-event-detail">
        <div className="myprofile-event-thumbnail">
          <img src={eventItem.image_url}/>
        </div>
        <div className="myprofile-event-summary">
          <div className="myprofile-event-summary-top">
            <p>{dateFormat(eventStarts, "ddd, mmm d @ h:MM TT")}</p>
            <p className="event-title">{eventItem.title}</p>
          </div>
          <div className="myprofile-event-summary-bottom">
            <p>{eventItem.venue_name}</p>
          </div>
        </div>
      </Link>
      <div className="myprofile-event-footer">
        <div className="myprofile-event-tags">
          <a href="#">#{typeName}</a>
          <a href="#">#{categoryName}</a>
        </div>
        <div className="myprofile-event-bookmark">
          <i className="material-icons">bookmark_border</i>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
