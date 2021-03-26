/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import './footer.scss'

import wathcapp from '../../icons/whatsapp.svg'
import instagram from '../../icons/instagram.svg'


const index = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
 const  defaultProps = {
    center: {
      lat: 43.22060753172728,
      lng:  76.84933180684257
    },
    zoom: 11
  };
    return (
        <div className="container">
        <h1>Контактная информация</h1>
      <div className="contact-info" >
        <div className="map">
                <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCi_AYX_HsP4pIrEn9S42pXCyN5upb4_f8' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact></div>

        <div className="contact-box">
          <div className="contact-text">
          <p>Республика Крым, г. Симферополь, Балаклавская, 68, офис 11</p>
          <p>E-mail: kascapital@yandex.ru</p>
          <p>Телефон: +7(978)-753-87-47</p>
          <p>Контактное лицо: Кастулин Виктор</p>
        </div>
        <p>Мы в соц сетях:</p>
    <a className="icons" href="https://www.instagram.com/finova_kz/?hl=ru"><img src={instagram} alt="Logo" /></a>
    <a className="icons" href="#"><img src={wathcapp} alt="Logo" /></a>

      </div>

      </div>
    </div>
    );
}

export default index;

