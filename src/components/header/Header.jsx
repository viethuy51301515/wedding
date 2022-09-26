import React, { useEffect, useRef } from "react";
import { HeaderContent, HeaderImage, HeaderStyled } from "./Header.styled";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getRatio } from "../../utils/animation";

const Header = ({title,content,imageUrl}) => {
  gsap.registerPlugin(ScrollTrigger);
  let ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      "#background",
      {
        backgroundPosition: () => "50% 0px",
      },
      {
        backgroundPosition: () =>
          `50% ${window.innerHeight * (1 - getRatio(ref.current))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: "#header",
          start: () => "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true, // to make it responsive
        },
      }
    );
  }, []);
  return (
    <HeaderStyled id="header" ref={ref}>
      <HeaderImage id="background"></HeaderImage>
      <HeaderContent id="content">
        <div>
          <h1>ALISABETH DESIGNS</h1>
        </div>
        <div>
          <h2>
            A BRANDING & WEB DESIGN BOUTIQUE CREATING EXQUISITE DESIGNS FOR
            WEDDING INDUSTRY PROS
          </h2>
        </div>
      </HeaderContent>
    </HeaderStyled>
  );
};

export default Header;
