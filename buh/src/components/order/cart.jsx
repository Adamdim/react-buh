import React from 'react';

import './order.scss'

const cart = ({value,title}) => {
    return (
        <div class="codepen-card">
        <div class="codepen-card-info">
  <input class="inputz" type="button" value="Заказать"/>
            </div>
            <div class="codepen-card-user">
             
              <div class="codepen-card-user-details">
                <h1 class="title">
                  {title}
                </h1>
                <p class="name">
                  от {value} тенге. / месяц
                </p>
              </div>
            </div>
            <div class="codepen-card-metrics">
              
            </div>
      </div>
    );
}

export default cart;
