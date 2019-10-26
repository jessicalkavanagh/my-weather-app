import React from 'react';

const Link = ({ onButtonClick, ...props }) => {
  return (
    <div>
      <button onClick={onButtonClick}>{props.children}</button>
    </div>
  );
};

export default Link;