import React from 'react';
import './TextInputs.css';

const TextInput = ({name, value, onChange, ...props}) => {
  return <input className="TextInputs" type="text" name={name} value={value} onChange={onChange} />;
};

export default TextInput;