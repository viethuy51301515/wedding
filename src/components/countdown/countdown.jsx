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
import { useSelector } from "react-redux";
import {differenceInSeconds} from 'date-fns';

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
        backgroundPosition: () => "50% -1100px",
      },
      {
        backgroundPosition: () =>
          `50% ${window.innerHeight * (1 - getRatio(ref.current)) - 1100}px`,
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
      const targetDateString = "12/10/2022 04:00 pm";

      let targetDate = new Date(targetDateString);

      let seconds = differenceInSeconds(targetDate,new Date());

      let days = parseInt(seconds / 86400);
      seconds = seconds - (days*86400);
      let hours = parseInt(seconds / 3600);
      seconds = seconds - (hours*3600);
      let minutes = parseInt(seconds / 60);
      seconds = seconds - (minutes*60);


      // setDateLeft({
      //   days: days,
      //   hours: hours,
      //   minutes: minutes,
      //   seconds: seconds,
      // })



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
