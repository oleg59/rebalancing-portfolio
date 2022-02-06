import React, {useState} from 'react';
import RebalanceTableTr from './RebalanceTableTr/RebalanceTableTr'
import Alerts from "../../../share/components/Alerts/Alerts";

const RebalanceTable = () => {
    const defaultTicker = {
        currentPrice: 0,
        amount: 0,
        sum: 0,
        currentShare: 0,
        desiredShare: 0,
        differenceBetweenShares: 0
    };

    const defaultTotal = {
        sum: 0,
        desiredShare: 0
    };

    const [tableData, setTableData] = useState([defaultTicker]);
    const [total, setTotal] = useState(defaultTotal);
    const [messages, setMessages] = useState([]);

    const addTicker = () => {
        updateTable([...tableData, {...defaultTicker}])
    };

    const removeTicker = (index) => {
        updateTable(tableData.filter((data, tableDataIndex) => index !== tableDataIndex))
    };

    const updateTicker = (event, name, index) => {
        updateTable(tableData.map((data, tableDataIndex) => {
            if (tableDataIndex === index) {
                data[name] = event.target.value;
            }
            data.sum = data?.currentPrice && data?.amount ? data.currentPrice * data.amount : 0;
            return data;
        }));
    };

    const updateTable = (tableData) => {
        const total = updateTotal(tableData);

        setTableData(tableData.map(data => {
            data.currentShare = data?.sum && total?.sum ? +(data.sum / total.sum * 100).toFixed(1) : 0;
            data.differenceBetweenShares = data.desiredShare ? +(data.desiredShare - data.currentShare).toFixed(1) : null;
            return data;
        }));

        validateTable(tableData, total);
    };

    const updateTotal = (data) => {
        const newTotal = data.reduce((value, data) => {
            value.desiredShare = value.desiredShare + +data.desiredShare;
            value.sum = value.sum + data.sum;
            return value;
        }, defaultTotal);
        setTotal(newTotal);
        return newTotal;
    };

    const validateTable = (data, total) => {
        const newMessages = [];

        if (total.desiredShare > 100) {
            newMessages.push('Желаемая доля больше 100%');
        }

        setMessages(newMessages);
    }

    const tableRows = tableData.map((data, index) =>
        <RebalanceTableTr
            key={index}
            data={data}
            handleChange={(event, name) => updateTicker(event, name, index)}
            handleRemove={() => removeTicker(index)}
        />
    );

    return (
        <div className="rebalance-table card">
            <Alerts messages={messages}/>
            <table className="table mb">
                <thead>
                    <tr>
                        <th>Тикер</th>
                        <th>Текущая цена за 1 шт. (руб.)</th>
                        <th>Количество (шт.)</th>
                        <th>Сумма (руб.)</th>
                        <th>Текущая доля (%)</th>
                        <th>Желаемая доля (%)</th>
                        <th>Рекомендация</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{total.sum}</td>
                        <td>100</td>
                        <td>{total.desiredShare}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            <button className="btn" onClick={addTicker}>Добавить тикер</button>
        </div>
    );
};

export default RebalanceTable;
