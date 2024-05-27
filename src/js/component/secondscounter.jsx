import React from "react";

const SecondsCounter = ({ seconds }) => {
    const formatTime = (time) => {
        return String(time).padStart(6, '0').split('');
    };

    const digits = formatTime(seconds);

    return (
        <div className="d-flex justify-content-center">
            <div className="digit">
                <i className="fa-regular fa-clock"></i>
            </div>
            {digits.map((digit, index) => (
                <div className="digit" key={index}>{digit}</div>
            ))}
        </div>
    );
};

export default SecondsCounter;