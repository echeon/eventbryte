import React from 'react';
import ThumbMap from './thumb_map';
import update from 'react-addons-update';
import TypeSelector from './type_selector';
import CategorySelector from './category_selector';

const defaultDate = () => {
  const afterOneMonth = new Date(Date.now() + (60 * 86400000));
  let year, month, date;
  year = afterOneMonth.getFullYear();
  month = `0${afterOneMonth.getMonth()}`.slice(-2);
  date = `0${afterOneMonth.getDate()}`.slice(-2);
  return `${year}-${month}-${date}`;
};

export default class Eventform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      organizer_id: this.props.currentUser.id,
      type_id: "",
      category_id: "",
      subcategory_id:"",
      start_date: defaultDate(),
      start_time: "19:00",
      end_date: defaultDate(),
      end_time: "22:00",
      venue_name: "",
      lat: "40.7250239",
      lng: "-73.99679200000003"
    };

    this.venueAddress = {
      address: "",
      city: "",
      state: "",
      zip: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop) {
    return e => {
      e.preventDefault();
      if (prop === "category_id") {
        this.setState({ subcategory_id: 0 });
      }
      this.setState({ [prop]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const thisEvent = this.state;
    this.props.createEvent(thisEvent);
  }



  handleAddressChange(prop) {
    return e => {
      this.venueAddress[prop] = e.currentTarget.value;
      const address = Object.keys(this.venueAddress).map(key => {
        return this.venueAddress[key];
      }).join(" ");

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          const lat = results[0].geometry.location.lat().toString();
          const lng = results[0].geometry.location.lng().toString();
          this.setState({ lat, lng });
        }
      });

    };
  }

  componentDidMount() {
    this.props.requestTypes();
    this.props.requestCategories();
  }

  render() {
    const { lat, lng } = this.state;

    const eventTitle = (
      <div className="event-detail-container">
        <h3>event title</h3>
        <input type="text"
               placeholder="Give it a short distinct name"
               onChange={this.handleChange("title")}/>
      </div>
    );

    const address = (
      <div className="event-detail-container address">
        <h3>location</h3>
        <div className="column">
          <div>
            <input type="text"
                   placeholder="Enter the venue's name"
                   onChange={this.handleChange("venue_name")}/>
            <input type="text"
                   placeholder="Address"
                   onChange={this.handleAddressChange("address")}/>
            <input type="text" placeholder="Address 2 (optional)" />
            <input type="text"
                   placeholder="City"
                   onChange={this.handleAddressChange("city")}/>
            <div className="column-inside-column">
              <input type="text"
                     placeholder="State"
                     onChange={this.handleAddressChange("state")}/>
              <input type="text"
                     placeholder="Zip/Postal"
                     onChange={this.handleAddressChange("zip")} />
            </div>
          </div>
          <div className="map-container">
            <ThumbMap lat={lat} lng={lng} />
          </div>
        </div>
      </div>
    );

    const dateTime = (
      <div className="event-detail-container column date-time">
        <div>
          <h3>starts</h3>
          <input type="date"
                 className="date-picker"
                 defaultValue={this.state.start_date}
                 onChange={this.handleChange("start_date")}/>
          <input type="time"
                 className="time-picker"
                 defaultValue={this.state.start_time}
                 onChange={this.handleChange("start_time")}/>
        </div>
        <div>
          <h3>ends</h3>
          <input type="date"
                 className="date-picker"
                 defaultValue={this.state.end_date}
                 onChange={this.handleChange("end_date")}/>
          <input type="time"
                 className="time-picker"
                 defaultValue={this.state.end_time}
                 onChange={this.handleChange("end_time")}/>
        </div>
      </div>
    );

    const eventDescription = (
      <div className="event-detail-container">
        <h3>event description</h3>
        <textarea placeholder="Give it a short distinct name"
                  onChange={this.handleChange("description")}/>
      </div>
    );

    const { types, categories } = this.props;
    const subcategories = this.state.category_id ?
                          categories[this.state.category_id].subcategories :
                          [];

    return (
      <section className="event-form-section">
        <h1>Create An Event</h1>
        <hr/>
        <form className="create-event-form">
          <div className="title-container">
            <span className="index">1</span>
            <span className="title">Event Details</span>
          </div>
          {eventTitle}
          {address}
          {dateTime}
          {eventDescription}

          <div className="title-container">
            <span className="index">2</span>
            <span className="title">Create Tickets</span>
          </div>

          <div className="title-container">
            <span className="index">3</span>
            <span className="title">Additional Settings</span>
          </div>
          <TypeSelector types={types}
                        onChange={this.handleChange("type_id")}/>
          <CategorySelector
            categories={categories}
            subcategories={subcategories}
            onCategoryChange={this.handleChange("category_id")}
            onSubcategoryChange={this.handleChange("subcategory_id")}/>

        </form>

        <div className="save-button-container">
          <h1>Nice job! You're almost done.</h1>
          <button onClick={this.handleSubmit}>save</button>
        </div>
      </section>
    );
  }
}
