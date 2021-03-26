import React from 'react';
import { Link} from "react-router-dom";
import './buh.scss'

const index = () => {
    return (
        <div class="container">
        <div class="info-start">
          <h1>
           <span id="">Ваш персональный </span><br/>бухгалтер
        </h1>
        <p>Весь спектр бухгалтерских услуг.</p>
       </div>
       <div class="info">
           <div class="black"></div>
           <div class="info-r">
               <p><span id="buhalter"> Бухгалтерские хлопоты - наша работа!</span> <br/>
                   Подписывая договор аутсорсинга, Вы получаете:
               </p>
               <ul>
                  <li>Эффективного главного бухгалтера.</li>
                  <li>Команду профессиональных сотрудников.</li>
                  <li>Комплексное обслуживание предприятия.</li>
                  <li>Закрепленную договором ответственность.</li>
                  <li>Экономию до 50% на штатного бухгалтера.</li>
               </ul>
               <h1>
                   ИП - от 500 руб. <br/>
                   ЮР ЛИЦА - от 2000 руб.
               </h1>
               <button id="btnalert" class="
               Service"><Link to="/Popup">ЗАКАЗАТЬ ОБСЛУЖИВАНИЕ</Link></button>
           </div>
       </div>
    </div>
    );
}

export default index;
