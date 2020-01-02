import React, { Component } from 'react';

import mapboxgl from 'mapbox-gl';
import FlatList from './flat_list';

import flats from '../../data/flat_data';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhaXJlZnJvZnJvIiwiYSI6ImNrMmc3YzdwdjBzOXEzaG9kY3hmdWJmbHgifQ.hvbyrZfZx7MxixCqThUrlA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0],
      map: null,
      marker: null
    };
  }

  componentDidMount() {
    this.renderMap();
  }

  updateSelectedFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
    this.updateMarker();
  }

  updateMarker = () => {
    const { lng, lat } = this.state.selectedFlat;
    const { map, marker } = this.state;
    // remove old marker
    marker.remove();
    // add new marker and update state
    const newMarker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    this.setState({ marker: newMarker });
    // fly to new marker
    map.flyTo({ center: [lng, lat] });
  }

  renderMap = () => {
    const { lat, lng } = this.state.selectedFlat;
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom: 16
    });
    // add map to App state
    this.setState({ map });
    const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    // add marker to App state
    this.setState({ marker });
  }

  render() {
    return (
      <div className="container">
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          updateSelectedFlat={this.updateSelectedFlat}
        />
        <div className="map-container" id="map-container">
        </div>
      </div>
    );
  }
}

export default App;
