import React from 'react';

const BioImage = ({ image, ...props }) => {
  return <img src={image} alt="Bio" />;
};

export default BioImage;