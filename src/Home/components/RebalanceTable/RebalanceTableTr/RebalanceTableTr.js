import React from 'react';

const RebalanceTableTr = ({data, handleChange, handleRemove}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    className="input"
                    value={data?.ticker}
                    onChange={(e) => handleChange(e, 'ticker')}
                />
            </td>
            <td>
                <input
                    type="number"
                    className="input"
                    min="1"
                    value={data?.currentPrice}
                    onChange={(e) => handleChange(e, 'currentPrice')}
                />
            </td>
            <td>
                <input
                    type="number"
                    className="input"
                    min="1"
                    value={data?.amount}
                    onChange={(e) => handleChange(e, 'amount')}
                />
            </td>
            <td>{data.sum}</td>
            <td>{data.currentShare}</td>
            <td>
                <input
                    type="number"
                    className="input"
                    min="1"
                    max="99"
                    value={data?.desiredShare}
                    onChange={(e) => handleChange(e, 'desiredShare')}
                />
            </td>
            <td></td>
            <td><button className="btn btn-danger" onClick={handleRemove}>Удалить</button></td>
        </tr>
    );
};

export default RebalanceTableTr;
