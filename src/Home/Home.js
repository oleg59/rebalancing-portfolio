import React from 'react';
import RebalanceTable from './components/RebalanceTable/RebalanceTable';

const Home = () => {
    return (
        <div className="home">
            <div className="mb">
                <h1>Ребалансировка портфеля</h1>
            </div>
            <RebalanceTable/>
        </div>
    );
};

export default Home;
