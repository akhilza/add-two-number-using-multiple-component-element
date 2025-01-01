import React from 'react';

function NumberInput({ placeholder, value, onChange, className }) {
  return (
    <div>
      <input
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        style={{ marginBottom: '10px' }}
      />
      <br />
    </div>
  );
}

export default NumberInput;
