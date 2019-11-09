import React from 'react';
import PropTypes from 'prop-types';


const Bio = ({ ...props }) => {
  return (
    <div>
      <br></br>
      <h3>Clive Weathers</h3>
      <p>Clive has been a hipster weather-person for over 40 years and he’s too busy taste testing a new chai latte before the big new sneaker drop to read your complaints.</p>
    </div>
  );
};

Bio.propTypes = {
  name: PropTypes.string
};

export default Bio;