import React from 'react';
import './LabelHeading.css';

const LabelHeading = props => {
  return <label className="Label">{props.children}</label>;
};

export default LabelHeading;