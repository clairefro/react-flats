// import React, { Component } from 'react';
// import mapboxgl from 'mapbox-gl';
//
// mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhaXJlZnJvZnJvIiwiYSI6ImNrNHUybHh0OTNsNDAzbG52MHB1anZhbnIifQ.t7CnyLeX5LAGM75pSHjrXw';
//
// class Map extends Component {
//   componentDidMount() {
//     const { lat, lng } = this.props.selectedFlat;
//     console.log(`lat: ${lat} lng: ${lng}`);
//
//     const map = new mapboxgl.Map({
//       container: 'map-container',
//       style: 'mapbox://styles/mapbox/streets-v9',
//       center: [lng, lat],
//       zoom: 12
//     });
//   }
// }
//
// export default Map;

//   render() {
//     const {viewport} = this.state;
//     return (
//       <MapGL
//         {...viewport}
//         mapStyle="mapbox://styles/mapbox/dark-v9"
//         mapboxApiAccessToken={TOKEN}>
//         <div className="nav" style={navStyle}>
//           <NavigationControl/>
//         </div>
//       </MapGL>
//       );
//   }
// }
