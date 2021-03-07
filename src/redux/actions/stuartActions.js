import * as actionTypes from '../actionTypes';
import { convertToGeolocation, createStuartJob } from '../../client/StuartClient';

export const setPickupSpot = data => ({
  type: actionTypes.SET_PICKUP_SPOT,
  pickup: data,
});

export const displayPickupSpot = data => ({
  type: actionTypes.SHOW_PICKUP_SPOT,
  showPickup: data,
});

export const setDropOffSpot = data => ({
  type: actionTypes.SET_DROPOFF_SPOT,
  dropOff: data,
});

export const displayDropOffSpot = data => ({
  type: actionTypes.SHOW_DROPOFF_SPOT,
  showDropOff: data,
});

export const creatingJob = data => ({
  type: actionTypes.CREATE_JOB,
  creating: data,
});

export const pickupAddressError = data => ({
  type: actionTypes.PICKUP_ADDRESS_ERROR,
  pickupError: data,
});

export const dropOffAddressError = data => ({
  type: actionTypes.DROPOFF_ADDRESS_ERROR,
  dropOffError: data,
});

export const displayAlert = data => ({
  type: actionTypes.SHOW_ALERT,
  showAlert: data,
});

export const setPickupSpotAction = address => dispatch => {
  convertToGeolocation(address)
    .then(({ data }) => {
      dispatch(displayPickupSpot(true));
      dispatch(pickupAddressError(false));
      dispatch(setPickupSpot(data));
    })
    .catch(error => {
      dispatch(pickupAddressError(true));
      dispatch(displayPickupSpot(false));
      return error;
    });
};

export const setDropOffSpotAction = address => dispatch => {
  convertToGeolocation(address)
    .then(({ data }) => {
      dispatch(displayDropOffSpot(true));
      dispatch(dropOffAddressError(false));
      dispatch(setDropOffSpot(data));
    })
    .catch(error => {
      dispatch(dropOffAddressError(true));
      dispatch(displayDropOffSpot(false));
      return error;
    });
};

export const createStuartJobAction = address => dispatch => {
  dispatch(displayDropOffSpot(false));
  dispatch(displayPickupSpot(false));
  dispatch(creatingJob(true));
  createStuartJob(address)
    .then(({ data }) => {
      if (data) {
        dispatch(creatingJob(false));
        dispatch(displayDropOffSpot(true));
        dispatch(displayPickupSpot(true));
        dispatch(displayAlert(true));
      }
    })
    .catch(error => {
      dispatch(creatingJob(false));
      return error;
    });
};
