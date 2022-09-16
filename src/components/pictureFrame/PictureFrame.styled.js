import styled from "styled-components";

export const PictureFrameStyled = styled.div`
  width: 300px;
  height: 450px;
  position: relative;
  background: white;
  &:after {
    content: " ";
    background-size: cover;
    background-position: center;
    background-image: url("background.jpg");
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
  }
`;
