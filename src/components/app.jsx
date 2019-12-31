import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: [],
      selectedFlatId: null
    };
  }

  render() {
    return (
      <div className="container">
        <div className="flats">
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
