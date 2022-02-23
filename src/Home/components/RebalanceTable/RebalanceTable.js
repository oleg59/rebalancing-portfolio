import React from 'react';
import RebalanceTableTr from './RebalanceTableTr/RebalanceTableTr'

const RebalanceTable = ({tableData, total, addTicker, updateTicker, removeTicker}) => {
    const tableRows = tableData.map((data, index) =>
        <RebalanceTableTr
            key={index}
            data={data}
            handleChange={(event) => updateTicker(event.target.value, event.target.name, index)}
            handleRemove={() => removeTicker(index)}
        />
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
                        <td>{total.currentSum}</td>
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
