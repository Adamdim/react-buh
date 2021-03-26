/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React,{useState} from 'react';
import Input from '../input'
import {nodeMailer} from '../../actions/user'

import './tmfb.scss'

const telephone = () => {

  const [telephone,setTelephone] = useState("");
    return (
<div class="telephone">
<h5>Оставьте заявку на сайте</h5>
            <p className="rules">Телефон<br/><span>
                   Введите номер телефона
               </span></p>
               <form class="first_form form_tmfb" action="">
               <Input value={telephone} setValue={setTelephone} className="input-telephone"/>
                <button onClick={()=>{nodeMailer(telephone)}}  className="btn">Отправить</button>
               </form>
           </div>
    );
}

export default telephone;
