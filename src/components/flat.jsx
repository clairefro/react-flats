import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (e) => {
    const { updateSelectedFlat, index } = this.props;
    updateSelectedFlat(index);
  }

  render() {
    // null handling
    // if (!this.props.id) {
    //   return null;
    // }

    const { flat, selected } = this.props;

    const bgStyle = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${flat.imageUrl})`
     };

    return (
      <div className={`flat-card${selected ? ' selected' : ''}`} style={bgStyle} onClick={this.handleClick}>
        <div className="flat-card-content">

          <div className="flat-card-top">
            <p>{flat.price} {flat.priceCurrency}</p>
          </div>

          <div className="flat-card-bottom">
            <h3>{flat.name}</h3>
          </div>

        </div>
      </div>
    );
  }
}

export default Flat;
