// Son.js
import React from 'react';

const Son = ({ numero, handleClick }) => {
  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => handleClick(numero)}
    >
      {numero}
    </button>
  );
};

export default Son;
