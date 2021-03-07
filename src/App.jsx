import React from 'react';
import { useDispatch } from 'react-redux';
import DirectionsForm from './components/DirectionsForm';
import Map from './components/Map';
import Alert from './components/Alert';
import './styles/styles.css';
import { displayAlert } from './redux/actions/stuartActions';

const App = () => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(displayAlert(false))}>
      <Alert />
      <DirectionsForm />
      <Map
        id="map"
        options={{
          center: { lat: 48.8606, lng: 2.3376 },
          zoom: 14,
        }}
      />
    </div>
  );
};

export default App;
