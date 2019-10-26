import React from 'react';

const CurrentTemp = ({ temperature, ...props }) => {
  return <div>{temperature}</div>;
};

export default CurrentTemp;