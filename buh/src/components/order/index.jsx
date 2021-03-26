import React from 'react';

import './order.scss'

import Cart from './cart'

const index = () => {
    return (
        <div className="container">
            <div className="order">
                <Cart value="1" title="сюда текст"/>
                <Cart value="2"  title="сюда текст" />
                <Cart value="3"  title="сюда текст"/>
                <Cart value="4"  title="сюда текст"/>
                <Cart value="5"  title="сюда текст"/>
                <Cart value="6"  title="сюда текст"/>
                <Cart value="7"  title="сюда текст"/>
                <Cart value="8"  title="сюда текст"/>
                <Cart value="9"  title="сюда текст"/>
                <Cart value="10" title="сюда текст"/>
                <Cart value="11" title="сюда текст"/>
                <Cart value="12" title="сюда текст"/>
            </div>
            
        </div>
    );
}

export default index;
