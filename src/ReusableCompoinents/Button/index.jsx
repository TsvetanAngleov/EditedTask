import React from "react";

const SubmitButton = ({ disabled, children, onClick }) => (
  <div>
    <button type="submit" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  </div>
);

export default SubmitButton;
