import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
const Fother = ({ house }) => {
    return (
        <div className='border'>
            <h1>Fother</h1>
            <h3>House:{house}</h3>
            <div className="fother-child">
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Fother;