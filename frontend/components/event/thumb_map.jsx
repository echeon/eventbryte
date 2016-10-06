import React from 'react';
import ReactDOM from 'react-dom';

export default class ThumbMap extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [];

    this.deleteMarkers = this.deleteMarkers.bind(this);
    this.clearMarkers = this.clearMarkers.bind(this);
    this.setMapOnAll = this.setMapOnAll.bind(this);
    this.addMarker = this.addMarker.bind(this);
  }

  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  clearMarkers() {
    this.setMapOnAll(null);
  }

  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
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
      center: { lat: 40.7250239, lng: -73.99679200000003 },
      zoom: 15,
      disableDefaultUI: true,
    };

    const map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, defaultOptions);

    this.addMarker(defaultOptions.center);
  }

  componentWillReceiveProps() {
    this.deleteMarkers();

    const address = this.props.address;
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({'address': address}, (results, status) => {
      if (status === 'OK') {
        this.map.setCenter(results[0].geometry.location);
        this.addMarker(results[0].geometry.location);
      }
    });
  }

  render() {
    return <div id="thumb-map" ref="map"></div>;
  }
}
