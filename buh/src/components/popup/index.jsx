/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
import Input from '../input/index';
import { Link} from "react-router-dom";
import {nodeMailerInfo} from '../../actions/user'

import './popup.scss';
const index = () => {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [number,setNumber] = useState("");

  return (
    <form className="form">
    <Link className="close" to="/Home">x</Link>
   <label>
     <p className="label-txt">Напишите свой Email</p>
     <Input value={email} setValue={setEmail} type="email" class="input"/>
     <div className="line-box">
       <div className="line"></div>
     </div>
   </label>
   <label>
     <p className="label-txt">Напишите своу имя</p>
     <Input value={name} setValue={setName} type="text" class="input"/>
     <div className="line-box">
       <div className="line"></div>
     </div>
   </label>
   <label>
     <p className="label-txt">Напишите свой телефон</p>
     <Input value={number} setValue={setNumber} type="text" class="input"/>
     <div className="line-box">
       <div className="line"></div>
     </div>
   </label>

   <button onClick={()=>{nodeMailerInfo(number,email,name)}} ><Link to="/Home"> отправить</Link></button>
 </form>
  );
}

export default index;
