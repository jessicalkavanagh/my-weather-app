import React from 'react';

const TextBox = ({value, onChange, name, ...props}) => {
  return <textarea className="Inputs TextArea" name={name} value={value} onChange={onChange}/>;
};

export default TextBox;