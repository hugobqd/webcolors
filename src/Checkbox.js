import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label style={{ padding: '.25em 0', display: 'block'}}>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
        style={{marginRight: '.67em'}}
      />
      {label}
    </label>
  </div>
);

export default Checkbox;