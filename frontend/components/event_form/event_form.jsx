import React from 'react';
import ReactDOM from 'react-dom';
import TypeSelector from './type_selector';
import CategorySelector from './category_selector';
import { hashHistory } from 'react-router';
import ImageUpload from './image_upload';
// import TicketEditorContainer from './ticket_editor_container';

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
      type_id: 0,
      category_id: 0,
      subcategory_id: 0,
      start_date: defaultDate(),
      start_time: "19:00",
      end_date: defaultDate(),
      end_time: "21:00",
      venue_name: "",
      address_detail: "",
      image_url: "",
      place_id: "ChIJvXNwoJpZwokRkJt6r4SugkU",
      num_tickets: 0,
      ticket_price: "0.00"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleRemoveImage = this.handleRemoveImage.bind(this);
  }

  initMap() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, {
      center: {lat: 40.7250239, lng: -73.99679200000003},
      zoom: 15,
      disableDefaultUI: true,
    });
    const input = document.getElementById('address-input');

    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', this.map);

    const marker = new google.maps.Marker({
      map: this.map
    });

    autocomplete.addListener('place_changed', () => {

      marker.setVisible(false);

      const place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert("Autocomplete's returned place contains no geometry");
        return "";
      }

      this.map.setCenter(place.geometry.location);
      this.map.setZoom(15);

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      document.querySelectorAll('.address input').forEach(el => {
        el.setAttribute('type', 'text');
      });
      const venueName = document.getElementById('venue-name');
      const addressDetail = document.getElementById('address-detail');
      const addressCity = document.getElementById('address-city');
      const addressState = document.getElementById('address-state');
      const addressZip = document.getElementById('address-zip');

      this.setState({ place_id: place.place_id, address_detail: "" });
      if (place.types.includes("point_of_interest")) {
        this.setState({ venue_name: place.name });
        venueName.value = place.name;
      } else {
        this.setState({ venue_name: "" });
        venueName.value = "";
      }
      const formattedAddress = place.formatted_address.split(", ");
      input.value = formattedAddress[0];
      addressDetail.value = "";
      addressCity.value = formattedAddress[1];
      addressState.value = formattedAddress[2].split(" ")[0];
      addressZip.value = formattedAddress[2].split(" ")[1];
    });
  }

  componentDidMount() {
    this.props.requestTypes();
    this.props.requestCategories();
    this.initMap();
    if (this.props.formType === 'edit') {
      this.props.requestEvent(this.props.eventId);
      this.setState(this.props.thisEvent);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { thisEvent } = nextProps;
    if (this.props.formType === 'edit') {
      if (this.props.eventId !== parseInt(nextProps.params.eventId)) {
        this.props.requestEvent(nextProps.params.eventId);
      } else {
        this.setState(thisEvent);

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({'placeId': thisEvent.place_id}, (results, status) => {
          if (status === 'OK') {
            //Populating address inputs
            document.querySelectorAll('.address input').forEach(el => {
              el.setAttribute('type', 'text');
            });

            const formattedAddress = results[0].formatted_address.split(", ");
            const venueName = document.getElementById('venue-name');
            const addressInput = document.getElementById('address-input');
            const addressDetail = document.getElementById('address-detail');
            const addressCity = document.getElementById('address-city');
            const addressState = document.getElementById('address-state');
            const addressZip = document.getElementById('address-zip');

            venueName.value = thisEvent.venue_name;
            addressDetail.value = thisEvent.address_detail;
            if (results[0].types.includes("point_of_interest")) {
              addressInput.value = formattedAddress[1];
              addressCity.value = formattedAddress[2];
              addressState.value = formattedAddress[3].split(" ")[0];
              addressZip.value = formattedAddress[3].split(" ")[1];
            } else {
              addressInput.value = formattedAddress[0];
              addressCity.value = formattedAddress[1];
              addressState.value = formattedAddress[2].split(" ")[0];
              addressZip.value = formattedAddress[2].split(" ")[1];
            }

            const img = `<img src=${thisEvent.image_url} />`;
            document.getElementById('image-preview').innerHTML = img;
          }
        });

      }
    }
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

  handleImageUpload(imageUrl) {
    this.setState({ image_url: imageUrl });
  }

  handleRemoveImage(e) {
    e.preventDefault();
    this.setState({ image_url: "" });
    const box = '<div><i class="material-icons">camera_enhance</i></div>';
    document.getElementById('image-preview').innerHTML = box;
  }

  handleSubmit(e) {
    e.preventDefault();
    const thisEvent = this.state;
    if (this.props.formType === 'create') {
      this.props.createEvent(thisEvent);
    } else if (this.props.formType === 'edit') {
      this.props.updateEvent(this.props.eventId, thisEvent);
    }
  }

  render() {
    const eventTitle = (
      <div className="event-detail-container">
        <h3>event title</h3>
        <input type="text"
               placeholder="Give it a short distinct name"
               onChange={this.handleChange("title")}
               value={this.state.title}/>
      </div>
    );

    const address = (
      <div className="event-detail-container address">
        <h3>location</h3>
        <div className="column">
          <div>
            <input type="hidden"
                   id="venue-name"
                   placeholder="Enter the venue's name (optional)"
                   onChange={this.handleChange("venue_name")} />
            <input type="text"
                   id="address-input"
                   placeholder="Please enter address here" />
            <input type="hidden"
                   id="address-detail"
                   placeholder="Address 2 (optional)"
                   onChange={this.handleChange("address_detail")} />
            <input type="hidden"
                   id="address-city"
                   disabled />
            <div className="column-inside-column">
              <input type="hidden"
                     id="address-state"
                     disabled />
              <input type="hidden"
                     id="address-zip"
                     disabled />
            </div>
          </div>
          <div className="map-container">
            <div id="thumb-map" ref="map"></div>
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
                 value={this.state.start_date}
                 onChange={this.handleChange("start_date")}/>
          <input type="time"
                 className="time-picker"
                 value={this.state.start_time}
                 onChange={this.handleChange("start_time")}/>
        </div>
        <div>
          <h3>ends</h3>
          <input type="date"
                 className="date-picker"
                 value={this.state.end_date}
                 onChange={this.handleChange("end_date")}/>
          <input type="time"
                 className="time-picker"
                 value={this.state.end_time}
                 onChange={this.handleChange("end_time")}/>
        </div>
      </div>
    );

    const eventImage = (
      <div className="event-detail-container">
          <h3>event image</h3>
          <ImageUpload onUpload={this.handleImageUpload}/>
          <button className="image-remove" onClick={this.handleRemoveImage}>
            <i className="material-icons">delete_forever</i> Remove Image
          </button>
      </div>
    );

    const eventDescription = (
      <div className="event-detail-container">
        <h3>event description</h3>
        <textarea
          placeholder="Give it a short distinct name"
          onChange={this.handleChange("description")}
          value={this.state.description}/>
      </div>
    );

    const ticketsInfo = (
      <div className="event-detail-container">
        <h3>ticket price</h3>
        <input type="number"
               className="number"
               step="0.01"
               onChange={this.handleChange("ticket_price")}
               value={this.state.ticket_price}/>

        <h3>number of tickets</h3>
        <input type="number"
               className="number"
               onChange={this.handleChange("num_tickets")}
               value={this.state.num_tickets}/>
      </div>
    );

    const { types, categories } = this.props;

    const subcategories = categories[this.state.category_id] ?
                          categories[this.state.category_id].subcategories :
                          [];

    return (
      <section className="event-form-section">
        <h1>{this.props.formType} An Event</h1>
        <hr/>
        <form className="create-event-form">
          <div className="title-container">
            <span className="index">1</span>
            <span className="title">Event Details</span>
          </div>
          {eventTitle}
          {address}
          {dateTime}
          {eventImage}
          {eventDescription}


          <div className="title-container">
            <span className="index">2</span>
            <span className="title">Tickets Info</span>
          </div>
          {ticketsInfo}

          <div className="title-container">
            <span className="index">3</span>
            <span className="title">Additional Settings</span>
          </div>

          <TypeSelector types={types}
                        value={this.state.type_id}
                        onTypeChange={this.handleChange("type_id")}/>
          <CategorySelector
            categoryId={this.state.category_id}
            subcategoryId={this.state.subcategory_id}
            categories={categories}
            subcategories={subcategories}
            onCategoryChange={this.handleChange("category_id")}
            onSubcategoryChange={this.handleChange("subcategory_id")}/>
        </form>

        <div className="event-form-footer">
          <div className="save-button-container">
            <h1>Nice job! You're almost done.</h1>
            <button onClick={this.handleSubmit}>make your event live</button>
          </div>
        </div>
      </section>
    );
  }
}
