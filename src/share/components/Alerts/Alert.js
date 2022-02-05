import React from 'react';
import './Alert.css';

const Alert = ({message}) => {
    return (
        <div className="alert danger">{message}</div>
    );
};

export default Alert;
