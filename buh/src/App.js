/* eslint-disable react-hooks/rules-of-hooks */

import React,{useEffect} from 'react';

import './App.scss';
import './mobileversion.scss';

import Head from './components/head';
import Buh from './components/buh';
import Tmfb from './components/tmfb';
import Footer from './components/footer';
import Cart from './components/cart';
import Order from './components/order';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'
import Popup from './components/popup'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {auth} from './actions/user'



function App({history}) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 57960); // new year seconds
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(auth())

  }, [])
  return (

    <div >
      <Router>
      <Head/>
      {!isAuth &&
            <Switch>
            <Route path="/SignIn" component={SignIn}/>
            <Route path="/SignUp" component={SignUp}/>
          </Switch>
      }

            <Switch>
            <Route path="/Popup" component={Popup}/>

          </Switch>
      <Buh/>
      <Tmfb expiryTimestamp={time}/>
      {/* <Footer/> */}
      <Cart/>
      <Order/>
      <Footer/>

    </Router>
    </div>

  );
}

export default App;
