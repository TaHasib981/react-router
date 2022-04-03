import React from 'react';
import '../AllCss/All.css'
const Brother = ({house}) => {
    return (
        <div className='border'>
            <h2>Brother</h2>
            <h4>House: {house}</h4>
        </div>
    );
};

export default Brother;