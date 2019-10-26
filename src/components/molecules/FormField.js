import React from 'react';
import LabelHeading from '../atoms/LabelHeading';
import TextBox from '../atoms/TextBox';
import TextInput from '../atoms/TextInput';

const FormField = ({ label, type, name, ...props }) => {
  return (
    <>
      <LabelHeading name={name}>{label}</LabelHeading>
      {type === 'text' && <TextInput name={name} />}
      {type === 'textbox' && <TextBox name={name} />}
    </>
  );
};

export default FormField;