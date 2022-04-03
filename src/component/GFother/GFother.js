import React, { createContext } from 'react';
import '../AllCss/All.css';
import './GFother.css'
import Aunty from '../Aunty/Aunty';
import Fother from '../Fother/Fother';
import Uncle from '../Uncle/Uncle';

export const RingContext = createContext('ring')
const GFother = () => {
    let house = 7
    const ornaments = 'diamond ring'
    return (
        <RingContext.Provider value={[house, ornaments]}>
            <div className='border'>
                <h1>Grand Fother</h1>
                <h2>House:{house}</h2>
                <div className='border g-child'>
                    <Fother house={house}></Fother>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>


    );
};

export default GFother;