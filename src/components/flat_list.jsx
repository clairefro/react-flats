import React from 'react';

import Flat from './flat';

const FlatList = (props) => {
  const renderList = ({ flats, updateSelectedFlat, selectedFlat }) => {
    return flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.id}
          selected={flat.id === selectedFlat.id}
          index={index}
          updateSelectedFlat={updateSelectedFlat}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList(props)}
    </div>
  );
};

export default FlatList;
