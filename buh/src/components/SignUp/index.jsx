

/* eslint-disable react-hooks/rules-of-hooks */
import {registration} from '../../actions/user'
import React, { useState } from 'react';
import './signup.scss'

import { Link} from "react-router-dom";
import Input from '../input'

const index = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");

  
return (
  <form className="form">
    <Link className="close" to="/Home">x</Link>
  <label>
    <p className="label-txt">ENTER YOUR EMAIL</p>
    <Input value={email} setValue={setEmail} type="email" className="input"/>
    <div className="line-box">
      <div className="line"></div>
    </div>
  </label>
  <label>
    <p className="label-txt">ENTER YOUR NAME</p>
    <Input value={name} setValue={setName} type="text" className="input"/>
    <div className="line-box">
      <div className="line"></div>
    </div>
  </label>
  <label>
    <p className="label-txt">ENTER YOUR PASSWORD</p>
    <Input value={password} setValue={setPassword} type="password" className="input"/>
    <div className="line-box">
      <div className="line"></div>
    </div>
  </label>
  <button onClick={()=>{registration(email,password)}} type="submit"><Link to="/SignIN"> submit</Link></button>
</form>
)
};

export default index;