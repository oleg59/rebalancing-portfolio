import React, {useState} from 'react';
import RebalanceTable from './components/RebalanceTable/RebalanceTable';
import Options from "./components/Options/Options";
import Alerts from "../share/components/Alerts/Alerts";

const Home = () => {
    const defaultTicker = {
        currentPrice: 0,
        amount: 0,
        currentSum: 0,
        currentShare: 0,
        desiredShare: 0,
        differenceBetweenShares: 0,
        requiredSum: 0,
        recommendation: 0
    };

    const defaultTotal = {
        currentSum: 0,
        desiredShare: 0
    };

    const [options, setOptions] = useState();
    const [tableData, setTableData] = useState([defaultTicker]);
    const [total, setTotal] = useState(defaultTotal);
    const [messages, setMessages] = useState([]);

    const handleChangeOptions = (tableOptions) => {
        setOptions(tableOptions);
        updateTable(tableData, tableOptions);
    };

    const addTicker = () => {
        updateTable([...tableData, {...defaultTicker}])
    };

    const removeTicker = (index) => {
        updateTable(tableData.filter((data, tableDataIndex) => index !== tableDataIndex))
    };

    const updateTicker = (value, name, index) => {
        updateTable(tableData.map((data, tableDataIndex) => {
            if (tableDataIndex === index) {
                data[name] = value;
            }
            data.currentSum = data?.currentPrice && data?.amount ? data.currentPrice * data.amount : 0;
            return data;
        }));
    };

    const updateTable = (tableData, tableOptions = options) => {
        const total = updateTotal(tableData);

        setTableData(tableData.map(data => {
            data.currentShare = data?.currentSum && total?.currentSum ? +(data.currentSum / total.currentSum * 100).toFixed(1) : 0;
            data.differenceBetweenShares = data.desiredShare ? +(data.desiredShare - data.currentShare).toFixed(1) : null;
            data.requiredSum = data.desiredShare ? +((data.desiredShare / 100) * (total.currentSum + tableOptions?.replenishment)).toFixed(1) : null;
            data.recommendation = Math.floor((data.requiredSum - data.currentSum) / data.currentPrice);
            return data;
        }));

        validateTable(tableData, total);
    };

    const updateTotal = (data) => {
        const newTotal = data.reduce((value, data) => {
            value.desiredShare = value.desiredShare + +data.desiredShare;
            value.currentSum = value.currentSum + data.currentSum;
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

    return (
        <div className="home">
            <div className="mb">
                <h1>Ребалансировка портфеля</h1>
            </div>
            <Options options={options} handleChangeOptions={handleChangeOptions}/>
            <Alerts messages={messages}/>
            <RebalanceTable tableData={tableData} total={total} addTicker={addTicker} updateTicker={updateTicker} removeTicker={removeTicker}/>
        </div>
    );
};

export default Home;
