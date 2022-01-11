import React from 'react';

const RebalanceTableTr = ({data, handleChange}) => {
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
            <td>990</td>
            <td>
                <input
                    type="number"
                    className="input"
                    min="1"
                    value={data?.share}
                    onChange={(e) => handleChange(e, 'share')}
                />
            </td>
            <td>купить 394 штуки</td>
        </tr>
    );
};

export default RebalanceTableTr;
