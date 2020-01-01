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
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [5, 34],
      zoom: 1.5
    });

    // map.on('move', () => {
    //   console.log('moved');
    //   // const { lng, lat } = map.getCenter();
    //   // this.setState({
    //   // lng: lng.toFixed(4),
    //   // lat: lat.toFixed(4),
    //   // zoom: map.getZoom().toFixed(2)
    //   // });
    // });
  }

  updateSelectedFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
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
