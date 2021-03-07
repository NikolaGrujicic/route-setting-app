import * as actionTypes from '../actionTypes';

const initialState = {
  pickup: {
    latitude: 0,
    longitude: 0,
  },
  dropOff: {
    latitude: 0,
    longitude: 0,
  },
  creating: false,
  showPickup: false,
  showDropOff: false,
  pickupError: false,
  dropOffError: false,
  pickupSuccess: false,
  dropOffSuccess: false,
  showAlert: false,
};

const stuartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PICKUP_SPOT:
      return { ...state, pickup: action.pickup, pickupSuccess: true };
    case actionTypes.SET_DROPOFF_SPOT:
      return { ...state, dropOff: action.dropOff, dropOffSuccess: true };
    case actionTypes.SHOW_PICKUP_SPOT:
      return { ...state, showPickup: action.showPickup };
    case actionTypes.SHOW_DROPOFF_SPOT:
      return { ...state, showDropOff: action.showDropOff };
    case actionTypes.CREATE_JOB:
      return { ...state, creating: action.creating };
    case actionTypes.PICKUP_ADDRESS_ERROR:
      return { ...state, pickupError: action.pickupError };
    case actionTypes.DROPOFF_ADDRESS_ERROR:
      return { ...state, dropOffError: action.dropOffError };
    case actionTypes.SHOW_ALERT:
      return { ...state, showAlert: action.showAlert };
    default:
      return state;
  }
};

export default stuartReducer;
