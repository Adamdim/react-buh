import React,{useState,useEffect} from 'react';


import './tmfb.scss'

    
const Timer = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-1`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

  
      
    return (
        <div className="newyear ">
            <h1 id="timer">До нового года осталось</h1>
            <ul className="countdown">
                <li>
                    <span className="days">{year}</span>
                    <div className=" days_ref">Дни</div>
                </li>
                <li className="seperator">:</li>
                <li>
                    <span className="hours">{year.hours}</span>
                    <div className=" hours_ref">Часы</div>
                </li>
                <li className="seperator">:</li>
                <li>
                    <span className="minutes">{year.minutes}</span>
                    <div className=" minutes">Минуты</div>
                </li>
                <li className="seperator">:</li>
                <li>
                    <span className="seconds">{year.seconds}</span>
                    <div className=" seconds_ref">Секунды</div>
                </li>

            </ul>
        </div>
    );
};

export default Timer;
