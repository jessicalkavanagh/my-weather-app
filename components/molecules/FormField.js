import React from 'react';
import LabelHeading from '../atoms/LabelHeading';
import TextArea from '../atoms/TextBox';
import TextInput from '../atoms/TextInput';

const FormField = ({ type, ...props }) => {
  return (
    <>
      <LabelHeading>Form Label</LabelHeading>
      {type === 'text' && <TextInput />}
      {type === 'textarea' && <TextBox />}
    </>
  );
};

export default FormField;