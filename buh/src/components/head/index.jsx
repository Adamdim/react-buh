/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';


import './head.scss'
import {  Link} from "react-router-dom";

import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../../reducers/userReducer' 

const index = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.user.isAuth)

    return (
      
          <div className="navigation">
            <div className="nav-container">
              <div className="brand">
              <Link to="/Home">Logo</Link>
              </div>
              <nav>
                <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                <ul className="nav-list">
                  <li>
                  <Link to="Financialservices">Услуги</Link>
                  </li>
                  <li>
                  <Link to="value ">Стоимость</Link>
                  </li>
                  <li>
                  </li>
                  <li>
                  <Link  to="Typesofservices">Виды услуг</Link>
                  </li>
                  <li>
                  <Link  to="/contact">Контакты</Link>
                  </li>
                      {!isAuth && <li className="signin btn btn-sm animated-button thar-three"><Link to="/SignIn" >SignIn</Link></li> }
                      {!isAuth && <li className="signup btn btn-sm animated-button thar-four"><Link to="/SignUp" >SignUp</Link></li>}
                      {isAuth && <li onClick={()=>dispatch(logout())} className="signup btn btn-sm animated-button thar-four"><a href="#">logout</a> </li>}
                </ul>
              </nav>
            </div>
          </div>
         
    );
}

export default index;
