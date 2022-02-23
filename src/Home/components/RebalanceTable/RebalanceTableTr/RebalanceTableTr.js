import React from 'react';

const RebalanceTableTr = ({data, handleChange, handleRemove}) => {
    let differenceBetweenShares = null;
    if (data.differenceBetweenShares > 0) {
        differenceBetweenShares = <span className="text-danger">(+{data.differenceBetweenShares}%)</span>;
    } else if (data.differenceBetweenShares < 0) {
        differenceBetweenShares = <span className="text-success">({data.differenceBetweenShares}%)</span>;
    }

    let recommendation = null;
    if (data.recommendation <= -1) {
        recommendation = <span className="text-danger">Продать {-data.recommendation}шт</span>;
    } else if (data.recommendation >= 1) {
        recommendation = <span className="text-success">Купить {data.recommendation}шт</span>;
    }

    return (
        <tr>
            <td>
                <input
                    type="text"
                    className="input"
                    value={data?.ticker}
                    name="ticker"
                    onChange={handleChange}
                />
            </td>
            <td>
                <input
                    type="number"
                    className="input"
                    min="1"
                    value={data?.currentPrice}
                    name="currentPrice"
                    onChange={handleChange}
                />
            </td>
            <td>
                <input
                    type="number"
                    className="input"
                    min="1"
                    value={data?.amount}
                    name="amount"
                    onChange={handleChange}
                />
            </td>
            <td>{data.currentSum}</td>
            <td>{data.currentShare} {differenceBetweenShares}</td>
            <td>
                <input
                    type="number"
                    className="input"
                    min="1"
                    max="99"
                    value={data?.desiredShare}
                    name="desiredShare"
                    onChange={handleChange}
                />
            </td>
            <td>{recommendation}</td>
            <td><button className="btn btn-danger" onClick={handleRemove}>Удалить</button></td>
        </tr>
    );
};

export default RebalanceTableTr;
