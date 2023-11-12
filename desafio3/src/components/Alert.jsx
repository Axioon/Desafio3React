
import React from "react";

const Alert = ({ alert }) => {

  //debemos pasarle al error al estado

  if (alert) {
    return (
      <div>
        {alert.error && (
          <div className={`alert alert-${alert.color}`}>{alert.msg}</div>
        )}
      </div>
    );
  }

  return null; // O
};

export default Alert;

