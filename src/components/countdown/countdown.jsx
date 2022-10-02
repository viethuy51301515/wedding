import React, { useEffect, useRef,useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  CountDownStyled,
  CountDownTitle,
  CountDownTimerStyled,
  CountDownBackground,
  CountDownContent,
} from "./countdown.styled";
import { getRatio } from "../../utils/animation";
import moment from 'moment';
import { useSelector } from "react-redux";
const CountDown = () => {
  const timer = useSelector(state => state.timer);
  const [dateLeft,setDateLeft] = useState({
    days:0,
    hours:0,
    minutes:0,
    seconds:0
  })
  gsap.registerPlugin(ScrollTrigger);
  let ref = useRef(null);
  let countdownRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      "#countdown-bg",
      {
        backgroundPosition: () => "50% 0px",
      },
      {
        backgroundPosition: () =>
          `50% ${window.innerHeight * (1 - getRatio(ref.current))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: "#countdown-header",
          start: () => "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true, // to make it responsive
        },
      }
    );
    countdownRef.current = setInterval(() => {
      const targetDateString = "12 10 2022 03:00 pm";
      let currentDate = moment();
  
      let targetDate = moment(targetDateString,"MM DD YYYY hh:mm a");
      var duration = moment.duration(targetDate.diff(currentDate));
    
      //Get Days and subtract from duration
      var days = duration.days();
      duration.subtract(days, 'days');
    
      //Get hours and subtract from duration
      var hours = duration.hours();
      duration.subtract(hours, 'hours');
    
      //Get Minutes and subtract from duration
      var minutes = duration.minutes();
      duration.subtract(minutes, 'minutes');

      var seconds = duration.seconds();
      setDateLeft({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      })



    }, 1000);
    return ()=>{
      clearInterval(countdownRef.current);
    }
  }, []);
  return (
    <CountDownStyled id="countdown-header" ref={ref} >
      <CountDownBackground id="countdown-bg" backgroundImg={timer}/>
      <CountDownContent>
        <CountDownTitle>
          <h2>
            <span>We are waiting for....</span>
            The adventure
          </h2>
        </CountDownTitle>
        <CountDownTimerStyled>
          <div>
            <div> {dateLeft.days}</div>
            <span>Days</span>
          </div>
          <div>
            <div> {dateLeft.hours}</div>
            <span>HOURS</span>
          </div>
          <div>
            <div> {dateLeft.minutes}</div>
            <span>MINS</span>
          </div>
          <div>
            <div> {dateLeft.seconds}</div>
            <span>SECS</span>
          </div>
        </CountDownTimerStyled>
      </CountDownContent>
    </CountDownStyled>
  );
};

export default CountDown;
