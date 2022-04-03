import React from 'react';
import '../AllCss/All.css'
const Uncle = ({house}) => {
    return (
        <div className='border'>
            <h1>Uncle</h1>
            <h3>House:{house}</h3>
        </div>
    );
};

export default Uncle;