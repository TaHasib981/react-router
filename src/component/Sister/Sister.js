import React, { useContext } from 'react';
import '../AllCss/All.css'
import { RingContext } from '../GFother/GFother';
const Sister = () => {
    const[one, two] = useContext(RingContext)
    return (
        <div className='border'>
            <h2>Sister</h2>
            <h4>House:{one}</h4>
            <p>Special: {two} </p>
        </div>
    );
};

export default Sister;