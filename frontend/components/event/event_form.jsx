import React from 'react';

export default class Eventform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleEvent: {
        title: "",
        description: "",
        organizerId: 0, //DO THIS!,
        typeId: 0,
        categoryId: 0,
        subcategoryId: 0,
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        venueName: "",
        latLong: "",
        imageUrl: ""
      },
      address: {

      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop) {
    return e => {
      e.preventDefault();
      this.setState({ [prop]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const singleEvent = this.state;
    this.props.createEvent(singleEvent);
  }

  getFullDate() {
    const timeNow = new Date();
    let year, month, date;
    year = timeNow.getFullYear();
    month = `0${timeNow.getMonth() + 2}`.slice(-2);
    date = `0${timeNow.getDate()}`.slice(-2);
    return `${year}-${month}-${date}`;
  }

  render() {
    const eventTitle = (
      <div className="event-detail-container">
        <h3>event title</h3>
        <input type="text" placeholder="Give it a short distinct name" onChange={this.handleChange("title")}/>
      </div>
    );

    const address = (
      <div className="event-detail-container address">
        <h3>location</h3>
        <div className="column">
          <div>
            <input type="text" placeholder="Enter the venue's name" onChange={this.handleChange("venueName")}/>
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Address 2" />
            <input type="text" placeholder="City" />
            <div className="column-inside-column">
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Zip/Postal" />
            </div>
          </div>
          <div className="thumb-map">
            MAPS
          </div>
        </div>
      </div>
    );

    const dateTime = (
      <div className="event-detail-container column">
        <div>
          <h3>starts</h3>
          <input type="date" className="date-picker" onChange={this.handleChange("startDate")}/>
          <input type="time" className="time-picker" onChange={this.handleChange("startTime")}/>
        </div>
        <div>
          <h3>ends</h3>
          <input type="date" className="date-picker" onChange={this.handleChange("endDate")}/>
          <input type="time" className="time-picker" onChange={this.handleChange("endTime")}/>
        </div>
      </div>
    );

    const eventDescription = (
      <div className="event-detail-container">
        <h3>event description</h3>
        <textarea placeholder="Give it a short distinct name" onChange={this.handleChange("title")}/>
      </div>
    );

    const selectType = (
      <div className="event-detail-container">
        <h3>event type</h3>
        <select>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
    );

    const selectTopic = (
      <div className="event-detail-container">
        <h3>event topic</h3>
        <div className="column">
          <div>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
      </div>
    );

    return (
      <section className="event-form-section">
        <h1>Create An Event</h1>
        <hr/>
        <form onSubmit={this.handleSubmit} className="create-event-form">
          <div className="title-container">
            <span className="index">1</span>
            <span className="title">Event Details</span>
          </div>
          {eventTitle}
          {address}
          {dateTime}
          {eventDescription}

          <div className="title-container">
            <span className="index">3</span>
            <span className="title">Additional Settings</span>
          </div>
          {selectType}
          {selectTopic}
        </form>

      </section>
    );
  }
}
