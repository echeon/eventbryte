import React from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router';

export default class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBookmark = this.toggleBookmark.bind(this);
  }

  toggleBookmark() {
    if (this.props.currentUser) {
      if (this.props.bookmarkId) {
        this.props.destroyBookmark(this.props.bookmarkId);
      } else {
        this.props.createBookmark({
          user_id: this.props.currentUser.id,
          event_id: this.props.thisEvent.id
        });
      }
    }
  }

  render() {
    const { thisEvent, typeName, categoryName, bookmarkId } = this.props;

    const eventStarts = new Date(thisEvent.start_date);
    eventStarts.setHours(...thisEvent.start_time.split(":"));

    const bookmarked = <i onClick={this.toggleBookmark}
                          className="material-icons bookmark">
                         bookmark
                       </i>;
    const notBookmarked = <i onClick={this.toggleBookmark}
                             className="material-icons no-bookmark">
                            bookmark_border
                          </i>;
    const bookmarkButton = bookmarkId ? bookmarked : notBookmarked;

    return (
      <div className="single-event-container">
        <Link to={`/events/${thisEvent.id}`} className="single-event-top-row">
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
        </Link>
        <div className="single-event-bottom-row">
          <div className="single-event-price-info">
            FREE
          </div>
          <div className="single-event-others">
            <div className="single-event-tags">
              <a>#{typeName}</a>
              <a>#{categoryName}</a>
            </div>
            <div className="bookmark-action">
              {bookmarkButton}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
