/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState,useEffect} from "react";
import './signin.scss'
import {login} from '../../actions/user'
import { Link} from "react-router-dom";
import Input from '../input/index';
import {useDispatch} from 'react-redux'

const index = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    const listener = e => {
      if (e.code === "Enter" || e.code === "NumpadEnter") {

        login(email,password)

      }
    };
    document.addEventListener("keydown", listener);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
return (
  <form className="form">
   <Link className="close" to="/Home">x</Link>
  <label>
    <p className="label-txt">ENTER YOUR EMAIL</p>
    <Input value={email} setValue={setEmail} type="email" class="input"/>
    <div className="line-box">
      <div className="line"></div>
    </div>
  </label>
  <label>
    <p className="label-txt">ENTER YOUR PASSWORD</p>
    <Input value={password} setValue={setPassword} type="password" class="input"/>
    <div className="line-box">
      <div className="line"></div>
    </div>
  </label>
  <button onClick={()=>{dispatch(login(email,password))}} ><Link to="/Home"> submit</Link></button>
</form>
)

};

export default index;
