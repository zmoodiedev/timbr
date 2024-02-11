import React from 'react';

const Tip = ({ title, body }) => {
    console.log(title, body); // For debugging
    return (
        <div className="tip">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Tip;