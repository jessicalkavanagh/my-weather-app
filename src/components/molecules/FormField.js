import React from 'react';
import LabelHeading from '../atoms/LabelHeading';
import TextArea from '../atoms/TextArea.js';
import TextInput from '../atoms/TextInput';

const FormField = ({ label, type, name, value, onChange, ...props }) => {
  return (
    <>
      <LabelHeading name={name}>{label}</LabelHeading>
      {type === 'text' && <TextInput name={name} value={value} onChange={onChange}/>}
      {type === 'textarea' && <TextArea name={name} value={value} onChange={onChange}/>}
    </>
  );
};

export default FormField;