import React, {useState} from 'react';
import RebalanceTableTr from './RebalanceTableTr/RebalanceTableTr'

const RebalanceTable = () => {
    const defaultTicker = {
        currentPrice: 0,
        amount: 0,
        sum: 0,
        currentShare: 0,
        desiredShare: 0
    };

    const defaultTotal = {
        sum: 0,
        desiredShare: 0
    };

    const [tableData, setTableData] = useState([defaultTicker]);
    const [total, setTotal] = useState(defaultTotal);

    const tableRows = tableData.map((data, index) =>
        <RebalanceTableTr
            key={index}
            data={data}
            handleChange={(event, name) => updateTicker(event, name, index)}
            handleRemove={() => removeTicker(index)}
        />
    );

    const updateTicker = (event, name, index) => {
        setTableData(tableData.map((data, tableDataIndex) => {
            if (tableDataIndex === index) {
                data[name] = event.target.value;
            }
            data.sum = data?.currentPrice && data?.amount ? data.currentPrice * data.amount : 0;
            return data;
        }));

        updateTotal();
    };

    const updateTotal = () => {
        setTotal(tableData.reduce((value, data) => {
            value.desiredShare = value.desiredShare + +data.desiredShare;
            value.sum = value.sum + data.sum;
            return value;
        }, defaultTotal));
    };

    const addTicker = () => {
        setTableData([...tableData, {...defaultTicker}])
    };

    const removeTicker = (index) => {
        setTableData(tableData.filter((data, tableDataIndex) => index !== tableDataIndex))
    };

    return (
        <div className="rebalance-table card">
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
