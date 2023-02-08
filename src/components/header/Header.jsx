import React, { useEffect, useRef } from "react";
import { HeaderContent, HeaderStyled } from "./Header.styled";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getRatio } from "../../utils/animation";
import { useState } from "react";
const Header = ({title,content,imageUrl,mbImage,isHaveName,isMain=false}) => {
  gsap.registerPlugin(ScrollTrigger);
  let refBack = useRef(null);
  const[className,setClassName] = useState('');
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
    const timer = setTimeout(() => {
      setClassName('hide-page');
    }, 5000);
    return ()=> clearTimeout(timer);
  }, []);
  return (
    <HeaderStyled id="header" ref={refBack}>
      {/* <HeaderImage id="background" backgroundImg={imageUrl} mobileImage={mbImage} isMain={isMain}></HeaderImage> */}
      <iframe 
        src="https://www.youtube.com/embed/5gE2fBr8Tn8?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
        title="2131231"  
        width="560" height="315"  
        frameborder="0" 
        allowfullscreen
        style={{pointerEvents:'none',width:'100%',height:'100%',position:'absolute'}}
        ></iframe>
      <HeaderContent className={className} id="content" color={isMain ? "white" : "black"}>
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
