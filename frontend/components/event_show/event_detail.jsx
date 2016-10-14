import React from 'react';
import dateFormat from 'dateformat';
import EventMap from './event_map';
import { Link, hashHistory } from 'react-router';

export default class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: "",
      address2: "",
      city: "",
      state: "",
    };
    this.bookmarkId = 0;
    this.ticketId = 0;
    this.translateLatLng = this.translateLatLng.bind(this);
    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.toggleTicket = this.toggleTicket.bind(this);
    this.handleTypeClick = this.handleTypeClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleTypeClick(typeId) {
    return e => {
      this.props.updateFilter('typeId', typeId);
      this.props.updateFilter('categoryId', 0);
      this.props.updateFilter('subcategoryId', 0);
    };
  }

  handleCategoryClick(categoryId) {
    return e => {
      this.props.updateFilter('typeId', 0);
      this.props.updateFilter('categoryId', categoryId);
      this.props.updateFilter('subcategoryId', 0);
    };
  }

  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser) {
      this.props.requestBookmarks(currentUser);
      this.props.requestTickets(currentUser);
    }
  }

  toggleBookmark() {
    if (this.props.currentUser) {
      if (this.bookmarkId) {
        this.props.destroyBookmark(this.bookmarkId);
        this.bookmarkId = 0;
      } else {
        this.props.createBookmark({
          user_id: this.props.currentUser.id,
          event_id: this.props.thisEvent.id
        });
      }
    }
  }

  toggleTicket() {
    if (this.props.currentUser) {
      if (this.ticketId) {
        this.props.destroyTicket(this.ticketId);
        this.ticketId = 0;
      } else {
        this.props.createTicket({
          user_id: this.props.currentUser.id,
          event_id: this.props.thisEvent.id
        });
      }
    } else {
      window.alert("Please log in to register.");
      hashHistory.push("login");
    }
  }

  translateLatLng(placeId) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({'placeId': placeId}, (results, status) => {
      if (status === 'OK') {
        let streetNumber, streetName, city, state, zip;
        results[0].address_components.forEach(c => {
          if (c.types[0] === "street_number") {
            streetNumber = c.long_name;
          } else if (c.types[0] === "route") {
            streetName = c.long_name;
          } else if (c.types[0] === "locality") {
            city = c.long_name;
          } else if (c.types[1] === "sublocality") {
            city = c.long_name;
          } else if (c.types[0] === "administrative_area_level_1") {
            state = c.short_name;
          } else if (c.types[0] === "postal_code") {
            zip = c.long_name;
          }
        });
        this.setState({
          address1: `${streetNumber} ${streetName}`,
          address2: `${city}, ${state} ${zip}`,
          city,
          state
        });
      }
    });
  }

  getParsedToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const date = today.getDate();
    return [year, month, date].join("-");
  }

  render() {
    const { thisEvent, types, categories, bookmarks, tickets } = this.props;

    const bookmarked = <i onClick={this.toggleBookmark}
                          className="material-icons bookmark">
                         bookmark
                       </i>;
    const notBookmarked = <i onClick={this.toggleBookmark}
                             className="material-icons no-bookmark">
                            bookmark_border
                          </i>;

    let bookmarkButton = notBookmarked;
    Object.keys(bookmarks).forEach(key => {
      if (thisEvent.id === bookmarks[key].event_id) {
        this.bookmarkId = key;
        bookmarkButton = bookmarked;
      }
    });

    const ticketed = <button onClick={this.toggleTicket}
                             className="ticket">Unregister</button>;
    const notTicketed = <button onClick={this.toggleTicket}
                                className="no-ticket">Register</button>;

    let ticketButton = notTicketed;
    Object.keys(tickets).forEach(key => {
      if (thisEvent.id === tickets[key].event_id) {
        this.ticketId = key;
        ticketButton = ticketed;
      }
    });

    if (thisEvent.start_date < this.getParsedToday()) {
      ticketButton = <button className="past-event">Past Event</button>;
    }

    const startDate = thisEvent.start_date ? new Date(thisEvent.start_date) : "";
    const endDate = thisEvent.end_date ? new Date(thisEvent.end_date): "";
    const startTime = thisEvent.start_time ? new Date().setHours(...thisEvent.start_time.split(":")) : "";
    const endTime = thisEvent.end_time ? new Date().setHours(...thisEvent.end_time.split(":")) : "";

    const type = types[thisEvent.type_id];
    const typeName = type ? type.name : "";

    const category = categories[thisEvent.category_id];
    const categoryName = category ? category.name : "";

    this.translateLatLng(thisEvent.place_id);

    const ticketPrice = thisEvent.ticket_price ?
                        `$${thisEvent.ticket_price.toFixed(2)}` : "FREE";

    return (
      <section className="event-show-detail-container">
        <div className="event-detail-header">
          <div className="event-image-container">
            <img src={thisEvent.image_url}/>
          </div>
          <div className="event-summary">
            <div className="event-main-info">
              <p className="event-month">{dateFormat(startDate, "mmm")}</p>
              <p className="event-date">{dateFormat(startDate, "dd")}</p>
              <h1>{thisEvent.title}</h1>
              <h4>by <span>{thisEvent.organizer_email}</span></h4>
            </div>
            <div>
            </div>
            <div className="event-price-info column">
              <div>{ticketPrice}</div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="event-actions-container">
          <div className="event-bookmark-button">
            {bookmarkButton}
          </div>
          <div className="event-register-button">
            {ticketButton}
          </div>
        </div>
        <div className="event-detail-main">
          <div className="event-detail">
            <div className="event-detail-left">
              <h3>description</h3>
              <p>{thisEvent.description}</p>
              <h3>tags</h3>
              <Link to="/browse"
                    onClick={this.handleTypeClick(thisEvent.type_id)}>
                    {typeName}</Link>
              <Link to="/browse"
                    onClick={this.handleCategoryClick(thisEvent.category_id)}>
                    {categoryName}</Link>
            </div>
            <div className="event-detail-right">
              <h3>date and time</h3>
              <p>{dateFormat(startDate, "ddd, mmmm d, yyyy")}</p>
              <p>
                {dateFormat(startTime, "h:MM TT")}
                -
                {dateFormat(endTime, "h:MM TT")}
              </p>
              <h3>location</h3>
              <p>{thisEvent.venue_name}</p>
              <p>{this.state.address1}</p>
              <p>{thisEvent.address_detail}</p>
              <p>{this.state.address2}</p>
            </div>
          </div>
          <div className="event-detail-map-container">
            <EventMap placeId={thisEvent.place_id} />
          </div>
        </div>
      </section>
    );
  }
}
