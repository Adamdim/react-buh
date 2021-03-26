import React from 'react';

import Timer from './timer';
import Telephone from './telephone'

import './tmfb.scss'


const index = ({expiryTimestamp}) => {
    return (
    <div className="container">
        <div className="timer">
        <Timer expiryTimestamp={expiryTimestamp}/>
        <Telephone/>
        </div>
    </div>
    );
}

export default index;
