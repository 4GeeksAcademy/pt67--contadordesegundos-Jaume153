import React from 'react';

const SecondsCounter = ({ seconds }) => {
  const digits = String(seconds).padStart(6, '0').split('');

  return (
    <div className="seconds-counter">
      <i className="fa-regular fa-clock"></i>
      {digits.map((digit, index) => (
        <span key={index} className="digit">
          {digit}
        </span>
      ))}
    </div>
  );
};

export default SecondsCounter;