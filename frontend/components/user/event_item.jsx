import React from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router';

export default class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTicket = this.toggleTicket.bind(this);
    this.toggleBookmark = this.toggleBookmark.bind(this);
  }

  toggleTicket() {
    if (this.props.helperId) {
      this.props.destroyTicket(this.props.helperId);
    } else {
      this.props.createTicket({
        user_id: this.props.currentUser.id,
        event_id: this.props.thisEvent.id
      });
    }
  }

  toggleBookmark() {
    if (this.props.helperId) {
      this.props.destroyBookmark(this.props.helperId);
    } else {
      this.props.createBookmark({
        user_id: this.props.currentUser.id,
        event_id: this.props.thisEvent.id
      });
    }
  }

  render() {
    const { formType, eventItem, typeName, categoryName, helperId } = this.props;

    const eventStarts = new Date(eventItem.start_date);
    eventStarts.setHours(...eventItem.start_time.split(":"));

    let actionButton = "";
    if (formType === 'bookmark') {
      const bookmarked = <i onClick={this.toggleBookmark}
                            className="material-icons bookmark">
                            bookmark</i>;
      const notBookmarked = <i onClick={this.toggleBookmark}
                               className="material-icons no-bookmark">
                               bookmark_border</i>;
      actionButton = helperId ? bookmarked : notBookmarked;
    } else if (formType === 'upcoming') {
      actionButton = (
        <i onClick={this.toggleTicket}
           className="material-icons ticket">remove_circle</i>
      );
    }



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
          <div className="myprofile-event-action">
            {actionButton}
          </div>
        </div>
      </div>
    );
  }
}
