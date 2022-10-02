import styled from "styled-components";

export const PictureFrameStyled = styled.div`
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "450px"};
  position: relative;
  background: white;
  box-shadow: inset 0 0 1px rgb(0 0 0 / 25%);
  &:after {
    content: " ";
    background-size: cover;
    background-position: center;
    background-image: url("${(props) => props.backgroundImg}");
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    z-index: 3;
    bottom: ${(props) => (props.isHaveCaption ? "60px" : "15px")};
  }
  h3 {
    position: absolute;
    z-index: 1;
    bottom: 15px;
    right: 15px;
    font-family: "Alex Brush", cursive;
    color: rgba(41, 79, 80, 1);
    text-transform: lowercase;
    letter-spacing: 0em;
    font-size: 30px;
    text-align: right;
    font-weight: 400;
    font-style: normal;
  }
`;
