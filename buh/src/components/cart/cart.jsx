import React from 'react';

import './cart.scss'


const cart = ({text,titleFirst,titleSecond}) => {
    return (
        <div className="card">
                  
        <div className="card-title">
          <a href="#" id="puls1" className="toggle-info btn">
            <span id="left" className="left"></span>
            <span id="right" className="right"></span>
          </a>
          <h4>
            {titleFirst} <br/>{titleSecond}
          </h4>
        </div>
        <div className="card-flap flap1">
          <div className="card-description">
            {text}
          </div>
          <div className="card-flap flap2">
          </div>
        </div>
      </div>
    );
}

export default cart;
