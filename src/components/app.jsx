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
      selectedFlat: flats[0]
    };
  }

  componentDidMount() {
    this.renderMap(this.state.selectedFlat);
  }

  updateSelectedFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });

    this.renderMap(this.state.selectedFlat);
  }

  renderMap = (selectedFlat) => {
    const { lat, lng } = selectedFlat
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom: 16
    });
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
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
