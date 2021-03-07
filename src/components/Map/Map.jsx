import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import PickupMarker from '../Markers/PickupMarker';
import DropOffMarker from '../Markers/DropOffMarker';

const Map = () => {
  const pickup = useSelector(state => state.stuart.pickup);
  const dropOff = useSelector(state => state.stuart.dropOff);
  const showPickup = useSelector(state => state.stuart.showPickup);
  const showDropOff = useSelector(state => state.stuart.showDropOff);
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDA8vXIKfugKoDr4tL4wfU1qc632fsy7-8' }}
        defaultCenter={{ lat: 48.8639, lng: 2.3262 }}
        defaultZoom={14}
      >
        {showPickup && (
        <PickupMarker lat={pickup.latitude} lng={pickup.longitude} />
        )}
        {showDropOff && (
        <DropOffMarker lat={dropOff.latitude} lng={dropOff.longitude} />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
