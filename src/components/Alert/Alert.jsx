import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const showAlert = useSelector(state => state.stuart.showAlert);
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
