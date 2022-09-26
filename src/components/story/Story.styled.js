import styled from "styled-components";

export const StoryContainer = styled.div`
  width: 100%;
  background-image: url("background.png");
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  flex-wrap: wrap;
  .story-content-2 {
    height: 400px;
    width: 550px;
    position: relative;
  }
`;
export const StoryImageSlider = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url("${(props) => props.imageSrc}");
  height: 400px;
  width: 550px;
  position: relative;
  transform-style: preserve-3d;
  flex-shrink: 1;
  transition: all 0.5s ease;
  @media (max-width: 768px) {
    margin: 0 50px;
    transform: scale(1, 0.8);
  }
  &:before {
    content: " ";
    background-size: cover;
    background-position: center;
    background-image: url("tape.png");
    position: absolute;
    top: 0;
    left: 0;
    rotate: -30deg;
    transform: translate(-40%, -50%);
    width: 171px;
    height: 34px;
    z-index: 2;
  }
  &:after {
    content: " ";
    background-size: cover;
    background-position: center;
    background-image: url("rib2.png");
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-50%) rotate(180deg);
    width: 40px;
    height: 100%;
    z-index: 1;
  }
  .ink {
    background-size: cover;
    background-position: center;
    background-image: url("ink_splatters.png");
    width: 400px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    rotate: -95deg;
    transform: translateZ(-1px) translateY(-60%);
  }
`;

export const StoryImageContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -40px;
  background-color: rgba(255, 255, 255, 1);
  width:500px;

  @media only screen and (max-width: 1116px){
    width:unset;
    top:0;
    left:60px;
    right:60px;
    transform: translate(0,-30%);
  }
  > div:nth-child(1) {
    padding: 50px;
    width: 100%;
    height:300px;
    box-sizing: border-box;
    transition: all 0.5s ease;
    p {
      color: rgba(37, 25, 16, 1);
      line-height: 1.8;
      letter-spacing: 0em;
      font-size: 14px;
      text-align: justify;
      font-family: "Libre Baskerville", serif;
      font-weight: 400;
      font-style: normal;
    }
    h3 {
      color: rgba(37, 25, 16, 1);
      text-transform: uppercase;
      line-height: 1.8;
      letter-spacing: 0.1em;
      font-size: 16px;
      text-align: left;
      font-family: "Sen", sans-serif;
      font-weight: 400;
      font-style: normal;
      text-align: right;
    }
  }
  > div:nth-child(2) {
    height: 40px;
    color: white;
    background: rgba(219, 171, 97, 1);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 16px;
    font-family: "Sen", sans-serif;
    font-weight: 400;
    font-style: normal;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .content__title {
    position: absolute;
    h2 {
      color: rgba(41, 79, 80, 1);
      font-size: 40px;
      font-family: "Alex Brush", cursive;
      font-weight: 400;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: 0em;
    }
  }
  .arrow {
    background-size: cover;
    background-position: center;
    background-image: url("rough_arrow.png");
    position: absolute;
    width: 125px;
    height: 105px;
    bottom: 0;
    right: 0;
    transform:translate(20%,10%);
    rotate(15deg);
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 0;
    width:20px;
    height:20px;
    transform:translate(100%,-50%);
    cursor:pointer;
  }
  .left-arrow {
    rotate: 180deg;
    position: absolute;
    top: 50%;
    left: 0;
    width:20px;
    height:20px;
    transform:translate(100%,50%);
    cursor:pointer;
  }
  
`;
