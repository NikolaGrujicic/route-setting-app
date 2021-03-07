import React from 'react';
import pickUpMarker from '../../assets/pickUpMarker.svg';

const PickupMarker = () => {
  return (
    <img className="marker" src={pickUpMarker} alt="pickup" />
  );
};

export default PickupMarker;
