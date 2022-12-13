import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      <div className="alert alert-success alert-dismissible fade show">
        <strong>{props.message}</strong>
      </div>
    </div>
  );
}

export default Alert;
