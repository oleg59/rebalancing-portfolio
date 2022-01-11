import React, {useState} from 'react';
import RebalanceTableTr from './RebalanceTableTr/RebalanceTableTr'

const RebalanceTable = () => {
    const [tableData, setTableData] = useState([
        {
            ticker: 'FXUS',
            currentPrice: 6000,
            amount: 10,
            share: 60
        },
        {
            ticker: 'FXDM',
            currentPrice: 80,
            amount: 8,
            share: 40
        }
    ]);

    const handleChangeTableData = (event, name, index) => {
        setTableData(tableData.map((data, tableDataIndex) => {
            if (tableDataIndex === index) {
                data[name] = event.target.value;
            }
            return data;
        }));
    };

    const tableRows = tableData.map((data, index) =>
        <RebalanceTableTr key={index} data={data} handleChange={(event, name) => handleChangeTableData(event, name, index)}/>
    );

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
        </div>
    );
};

export default RebalanceTable;
