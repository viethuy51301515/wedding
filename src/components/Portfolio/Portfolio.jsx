import React, { useEffect } from "react";
import {
  PortfolioStyled,
  InforStyled,
  InforContent,
  InforImage,
  NextPrevButton,
  PortfolioContainer,
  NextButton,
  PrevButton,
  PortfolioTop,
  PortfolioBottom,
} from "./Portfolio.styled";
import {AnimatePresence, motion} from 'framer-motion';
import { gsap } from "gsap";
import { useState } from "react";
import PictureFrame from "../pictureFrame/PictureFrame";
const Portfolio = () => {
  const [[page,direction],setPage] = useState([0,0]);


  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".contain",
          start: "top 100px",
          end: "bottom top",
        },
      })
      .fromTo(
        ".profile-image",
        1,
        { opacity: 0, right: "45%" },
        { opacity: 1, right: "50%" }
      );
  }, []);

  return (
    <PortfolioContainer>
        <PortfolioStyled className="contain">
            <PortfolioTop>
              <div>
                  <PictureFrame className='profile'/>
              </div>
              <div>
                <h1>
                I am a couples and wedding photographer cozied up in the Blue Ridge Mountains of NC.
                </h1>
                <p>
                When I am not out frolicking, adventuring, and dancing on mountain tops with my crazy, amazing couples... you can likely find me somewhere outdoors, wrangling my two sweet babies, snowboarding with the hubs, grabbing a beer with friends, or in the Chick Fil A drive thru... AGAIN. 
                </p>
                <div className="stamp" />
              </div>
            
            </PortfolioTop>
            <PortfolioBottom>
              <div className="note-content">
              <div className="note-1">
                <h1>my style and approach is far from ordinary... </h1>
                <p>
                It's not traditional. It's not posed. It's not staged. It thrives on movement, connection, and emotion. I always like to get to know each of my couples on a deeper, more personal level so, that when you do step in front of my camera for the first time... you know me, you trust me, you feel comfortable with me... so much so that letting me into your lives, your story, and your love comes easy and naturally.
                </p>
              </div>
              <div className="note-2">

              </div>
              <div className="note-3">

              </div>
              </div>
            </PortfolioBottom>
        </PortfolioStyled>
    </PortfolioContainer>
  );
};

export default Portfolio;
