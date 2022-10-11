import styled from "styled-components";

export const AboutStyed = styled.div`
  background-color: rgba(108, 134, 133, 1);
  position: relative;
  display: grid;
  column-gap: 10px;
  grid-template-areas: ". left-content right-content";
  padding: 100px 50px 100px 300px;
  @media (max-width: 768px) {
    grid-template-areas:
      "image-content"
      "left-content"
      "right-content";
    padding: 50px;
  }
  .about__content {
    position: relative;
    z-index: 3;
  }
  .about__content:nth-child(1) {
    display: flex;
    grid-area: left-content;
    justify-content: flex-end;
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
    h1 {
      color: rgba(255, 255, 255, 1);
      font-size: 28px;
      text-align: center;
      font-family: "Merriweather", serif;
      font-weight: 400;
      font-style: normal;
      max-width: 300px;
      span {
        color: rgba(255, 255, 255, 1);
        line-height: 0.6;
        font-size: 40px;
        font-family: "Alex Brush", cursive;
        font-weight: 400;
        font-style: normal;
      }
    }
  }
  .about__content:nth-child(2) {
    grid-area: right-content;
    p {
      line-height: 1.8;
      letter-spacing: 0em;
      font-size: 14px;
      text-align: justify;
      font-family: "Merriweather", serif;
      font-weight: 400;
      font-style: normal;
      color: rgba(255, 255, 255, 1);
      margin-bottom: 20px;
    }
  }
`;

export const AboutImageStyled = styled.div`
  background-image: url("${(props) => props.backgroundImg}");

  background-size: cover;
  background-position: center;
  height: 300px;
  width: 300px;
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: 2;
  rotate: -2deg;
  transform-style: preserve-3d;
  @media (max-width: 768px) {
    grid-area: image-content;
    position: relative;
  }
  &:before {
    content: " ";
    background-size: cover;
    background-position: center;
    background-image: url("../paper2.png");
    width: 217px;
    height: 155px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
    transform: translate(30%, 30%) translateZ(-1px);
  }
  &:after {
    content: " ";
    position: absolute;
    background-size: cover;
    background-position: center;
    background-image: url("../ink_splatters-01.png");
    height: 160px;
    width: 160px;
    bottom: 0;
    left: 0;
    transform: rotate(21deg) translate(-30%, 50%);
  }
`;
export const LinkArrow = styled.div`
  width: 160px;
  height: 200px;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 50%) rotate(-90deg);
  img {
    height: auto;
    max-width: 100%;
  }
`;
