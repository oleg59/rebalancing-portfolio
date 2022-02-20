import React, {useState} from 'react';
import RebalanceTable from './components/RebalanceTable/RebalanceTable';
import Options from "./components/Options/Options";

const Home = () => {
    const [options, setOptions] = useState();

    return (
        <div className="home">
            <div className="mb">
                <h1>Ребалансировка портфеля</h1>
            </div>
            <Options options={options} handleChangeOptions={setOptions}/>
            <RebalanceTable options={options}/>
        </div>
    );
};

export default Home;
