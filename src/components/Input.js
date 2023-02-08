import React from 'react';

export default function Input({ type, placeholder, name, value, onChange }) {
  return (
    <div>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
