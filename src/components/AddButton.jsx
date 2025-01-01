import React from 'react';

function AddButton({ onClick, className, buttonText }) {
  return (
    <button onClick={onClick} className={className} style={{ marginTop: '10px' }}>
      {buttonText || "Add"}
    </button>
  );
}

export default AddButton;
