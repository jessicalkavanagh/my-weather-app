import React from 'react';
import PropTypes from 'prop-types';
import './BioImage.css';

const BioImage = ({avatar, ...props}) => {
    return (
        <div className="image-cropper">
        <img src={avatar} className="profile-pic" alt="weather person profile"/>
        </div>
    )
}

BioImage.propTypes = {
    image: PropTypes.string.isRequired
};

export default BioImage;