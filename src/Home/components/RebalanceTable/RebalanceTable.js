import React, {useState} from 'react';
import RebalanceTableTr from './RebalanceTableTr/RebalanceTableTr'

const RebalanceTable = () => {
    const [tableData, setTableData] = useState([{}]);

    const tableRows = tableData.map((data, index) =>
        <RebalanceTableTr key={index} data={data} handleChange={(event, name) => handleChangeTableData(event, name, index)}/>
    );

    const handleChangeTableData = (event, name, index) => {
        setTableData(tableData.map((data, tableDataIndex) => {
            if (tableDataIndex === index) {
                data[name] = event.target.value;
            }
            return data;
        }));
    };

    const addTicker = () => {
        setTableData([...tableData, {}])
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
                        <th>Доля (%)</th>
                        <th>Рекомендация</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
            <button className="btn" onClick={addTicker}>Добавить тикер</button>
        </div>
    );
};

export default RebalanceTable;
