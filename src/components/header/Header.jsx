import React, { useEffect, useRef } from "react";
import { HeaderContent, HeaderImage, HeaderStyled } from "./Header.styled";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getRatio } from "../../utils/animation";
const Header = ({title,content,imageUrl}) => {
  gsap.registerPlugin(ScrollTrigger);
  let refBack = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      "#background",
      {
        backgroundPosition: () => "50% 0px",
      },
      {
        backgroundPosition: () =>
          `50% ${window.innerHeight * (1 - getRatio(refBack.current))}px`,
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
    <HeaderStyled id="header" ref={refBack}>
      <HeaderImage id="background" backgroundImg={imageUrl}></HeaderImage>
      <HeaderContent id="content">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <h2>
            {content}
          </h2>
        </div>
      </HeaderContent>
    </HeaderStyled>
  );
};

export default Header;
