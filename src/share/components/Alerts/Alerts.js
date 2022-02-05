import React from 'react';
import Alert from "./Alert";

const Alerts = ({messages}) => {
    if (!messages || messages.length ===0) {
        return null;
    }

    const alerts = messages.map((message) =>
        <Alert message={message}/>
    );

    return (
        <div className="alerts">
            {alerts}
        </div>
    );
};

export default Alerts;
