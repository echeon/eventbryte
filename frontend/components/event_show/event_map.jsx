import React from 'react';
import ReactDOM from 'react-dom';

export default class EventMap extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [];

    this.addMarker = this.addMarker.bind(this);
  }

  addMarker(location) {
    const marker = new google.maps.Marker({
      map: this.map,
      position: location
    });
    this.markers.push(marker);
  }

  componentDidMount() {
    const defaultOptions = {
      center: {
        lat: 40.7250239,
        lng: -73.99679200000003
      },
      zoom: 13,
      mapTypeControl: false,
    };

    const map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, defaultOptions);
  }

  componentWillReceiveProps() {
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow;
    geocoder.geocode({'placeId': this.props.placeId}, (results, status) => {
      if (status === 'OK') {
        this.map.setCenter(results[0].geometry.location);
        this.addMarker(results[0].geometry.location);
        infowindow.setContent(results[0].formatted_address);
        infowindow.open(this.map, this.markers[0]);
      }
    });
  }

  render() {
    return <div id="event-detail-map" ref="map"></div>;
  }
}
