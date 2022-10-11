import React from "react";
import { useState } from "react";
import ToastComponent from "../Toast/Toast";
import { PictureFrameStyled } from "./PictureFrame.styled";

const PictureFrame = ({className,caption,width,height,backgroundImg}) => {
  const [isShow,setIsShow] = useState(false);
  return <PictureFrameStyled backgroundImg={backgroundImg} className={className} isHaveCaption = {!!caption} 
    width={width}
    height={height}
    onClick={ () => {setIsShow(true)}}
  >
    {caption && <h3>{caption}</h3>}
    <ToastComponent show={isShow} setShow={setIsShow} content={"Gallery is coming soon !!"}/>
  </PictureFrameStyled>;
};

export default PictureFrame;
