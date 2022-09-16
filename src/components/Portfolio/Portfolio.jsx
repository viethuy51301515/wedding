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
} from "./Portfolio.styled";
import {AnimatePresence, motion} from 'framer-motion';
import { gsap } from "gsap";
import { useState } from "react";
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
        <div className="bride">
        <InforStyled>
          <InforContent>
            <div class="pf-img"></div>
            <div className="pf-head">
              <h3>meet our founder</h3>
            </div>
            <div className="pf-title">
            <h2>Hi There, I'm Thao 12312321 12321</h2>
            </div>
            <div className="pf-description">
              <p>
                Rainy day naps, Anthropologie, Free People and a good cup of
                green tea are my jam. I'm an encourager by nature and an
                entrepreneur by heart. My greatest honor is to help tell your
                story through creating an intentional, strategic brand that
                lasts you a lifetime.
              </p>
            </div>
            <div>
              <h2>Bride</h2>
            </div>
          </InforContent>
        </InforStyled>
        <InforImage className="profile-image">
          <div></div>
        </InforImage>
      </div>
    </PortfolioStyled>
    </PortfolioContainer>
  );
};

export default Portfolio;
