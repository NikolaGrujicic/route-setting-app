import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPickupSpotAction, setDropOffSpotAction, createStuartJobAction } from '../../redux/actions/stuartActions';
import pickUpBadgeBlank from '../../assets/pickUpBadgeBlank.svg';
import pickUpBadgePresent from '../../assets/pickUpBadgePresent.svg';
import pickUpBadgeError from '../../assets/pickUpBadgeError.svg';
import dropOffBadgeBlank from '../../assets/dropOffBadgeBlank.svg';
import dropOffBadgePresent from '../../assets/dropOffBadgePresent.svg';
import dropOffBadgeError from '../../assets/dropOffBadgeError.svg';

const DirectionsForm = () => {
  const dispatch = useDispatch();

  const [pickupSvgColor, setPickupSvgColor] = useState('');
  const [dropOffSvgColor, setDropOffSvgColor] = useState('');
  
  const [pickupValue, setPickupValue] = React.useState(0);
  const [dropOffValue, setDropOffValue] = React.useState(0);

  const showPickup = useSelector(state => state.stuart.showPickup);
  const showDropOff = useSelector(state => state.stuart.showDropOff);
  const creating = useSelector(state => state.stuart.creating);

  const pickupError = useSelector(state => state.stuart.pickupError);
  const dropOffError = useSelector(state => state.stuart.dropOffError);

  const pickupSuccess = useSelector(state => state.stuart.pickupSuccess);
  const dropOffSuccess = useSelector(state => state.stuart.dropOffSuccess);

  const createJobBtnText = {
    createJob: 'Create Job',
    creatingJob: 'Creating...',
  };

  const setPickupMarker = e => {
    e.preventDefault();
    const address = { address: e.target.value };
    dispatch(setPickupSpotAction(address));
  };

  const setDropOffMarker = e => {
    e.preventDefault();
    const address = { address: e.target.value };
    dispatch(setDropOffSpotAction(address));
  };

  const onSubmit = e => {
    e.preventDefault();
    const address = {
      pickup: e.target.pickupAddress.value,
      dropoff: e.target.dropOffAddress.value,
    };
    dispatch(createStuartJobAction(address));
  };

  useEffect(() => {
    if (pickupSuccess) {
      setPickupSvgColor('yellow');
    }
    if (pickupError) {
      setPickupSvgColor('red');
    }
  }, [pickupSuccess, pickupError]);

  const showPickupSvg = color => {
    if (color === 'yellow') {
      return pickUpBadgePresent;
    }
    if (color === 'red') {
      return pickUpBadgeError;
    }

    return pickUpBadgeBlank;
  };

  useEffect(() => {
    if (dropOffSuccess) {
      setDropOffSvgColor('yellow');
    }
    if (dropOffError) {
      setDropOffSvgColor('red');
    }
  }, [dropOffSuccess, dropOffError]);

  const showDropOffSvg = color => {
    if (color === 'yellow') {
      return dropOffBadgePresent;
    }
    if (color === 'red') {
      return dropOffBadgeError;
    }

    return dropOffBadgeBlank;
  };

  useEffect(() => {
    const address = { address: pickupValue };

    const timeout = setTimeout(() => {
      if(pickupValue !== 0){
        dispatch(setPickupSpotAction(address));
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [pickupValue]);

  useEffect(() => {
    const address = { address: dropOffValue };

    const timeout = setTimeout(() => {
      if(dropOffValue !== 0){
        dispatch(setDropOffSpotAction(address));
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [dropOffValue]);

  return (
    <div className="card directions-form-container">
      <form onSubmit={onSubmit}>
        <div className="row-address">
          <div>
            <img src={showPickupSvg(pickupSvgColor)} className="pickup-img" alt="pick up" />
          </div>
          <div className="col-sm-10">
            <input type="text" name="pickupAddress" className="form-control pickup-input" placeholder="Pick up address" onBlur={e => setPickupMarker(e)} onInput={e => setPickupValue(e.target.value)} />
          </div>
        </div>
        <div className="row-address">
          <div>
            <img src={showDropOffSvg(dropOffSvgColor)} className="dropoff-img" alt="drop off" />
          </div>
          <div className="col-sm-10">
            <input type="text" name="dropOffAddress" className="form-control dropoff-input" placeholder="Drop off address" onBlur={e => { setDropOffMarker(e); }} onInput={e => setDropOffValue(e.target.value)} />
          </div>
        </div>
        <div className="row-address mb-10 create-btn-container">
          <div className="col-sm-10">
            <button disabled={!(showPickup && showDropOff)} type="submit" className="btn btn-primary create-btn">{ creating ? createJobBtnText.creatingJob : createJobBtnText.createJob }</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DirectionsForm;
