import React from 'react';

const Options = ({options, handleChangeOptions}) => {
    const handleChange = (event) => {
        const updatedOptions = {...options, [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value};
        handleChangeOptions(updatedOptions);
    };

    return (
        <div className="card">
            <label className="label mb">
                Тип операции:
                <select className="input" name="type" value={options?.type} onChange={handleChange}>
                    <option value="1">Ребалансировка</option>
                </select>
            </label>
            <label className="label">
                Сумма пополнения:
                <input type="number" className="input" name="replenishment" value={options?.replenishment || 0} onChange={handleChange}/>
                (руб.)
            </label>
        </div>
    );
};

export default Options;
