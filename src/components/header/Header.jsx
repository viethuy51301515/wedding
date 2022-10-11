import React, { useEffect, useRef } from "react";
import { HeaderContent, HeaderImage, HeaderStyled } from "./Header.styled";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getRatio } from "../../utils/animation";
const Header = ({title,content,imageUrl,mbImage,isHaveName,isMain=false}) => {
  gsap.registerPlugin(ScrollTrigger);
  let refBack = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      "#background",
      {
        backgroundPosition: () => "50% -200px",
      },
      {
        backgroundPosition: () =>
          `50% ${window.innerHeight * (1 - getRatio(refBack.current)) - 200}px`,
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
      <HeaderImage id="background" backgroundImg={imageUrl} mobileImage={mbImage} isMain={isMain}></HeaderImage>
      <HeaderContent id="content" color={isMain ? "white" : "black"}>
        {
          isHaveName &&         <div><h2>H + T</h2> </div> 
        }

        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <span>
            {content}
          </span>
        </div>
      </HeaderContent>
    </HeaderStyled>
  );
};

export default Header;
