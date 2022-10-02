import React from "react";
import { PictureFrameStyled } from "./PictureFrame.styled";

const PictureFrame = ({className,caption,width,height,backgroundImg}) => {
  return <PictureFrameStyled backgroundImg={backgroundImg} className={className} isHaveCaption = {!!caption} 
    width={width}
    height={height}
  >
    {caption && <h3>{caption}</h3>}
  </PictureFrameStyled>;
};

export default PictureFrame;
