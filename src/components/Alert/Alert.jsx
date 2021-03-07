import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayAlert } from '../../redux/actions/stuartActions';

const Alert = () => {
  const dispatch = useDispatch();
  const showAlert = useSelector(state => state.stuart.showAlert);

  useEffect(() => {
    if(showAlert) {
      setTimeout(() => {
        dispatch(displayAlert(false));
      }, 5000);
    }
  }, [showAlert]);

  return (
    <div>
      {showAlert && (
        <div className="alert alert-secondary" role="alert">
          Job has been created successfully!
        </div>
      )}
    </div>
  );
};

export default Alert;
