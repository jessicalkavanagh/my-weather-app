import React from 'react';
import PropTypes from 'prop-types';


const Bio = ({ ...props }) => {
  return (
    <div>
      <h2>Jess Kavanagh</h2>
      <p>Description</p>
    </div>
  );
};

Bio.propTypes = {
  name: PropTypes.string
};

export default Bio;