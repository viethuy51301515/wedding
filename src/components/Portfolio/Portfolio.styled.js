import styled from "styled-components";

export const PortfolioContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const PortfolioStyled = styled.div`
  width: 100%;
  background-image: url("../background.png");
  position: relative;
`;

export const PortfolioTop = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  > div:nth-child(1) {
    position: relative;
    width: 300px;
    height: 500px;
    top: -45px;
    z-index: 3;
    @media only screen and (max-width: 768px) {
      top: -100px;
    }
    .profile {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      transform-style: preserve-3d;
      &:before {
        content: " ";
        background-size: cover;
        background-position: center;
        background-image: url("../paper2.png");
        position: absolute;
        left: -78px;
        bottom: 15px;
        width: 217px;
        height: 155px;
        transform: rotate(90deg) translateZ(-1px);
      }
    }
  }
  > div:nth-child(2) {
    width: 600px;
    margin: 50px 30px;
    position: relative;
    h1 {
      color: rgba(37, 25, 16, 1);
      line-height: 1.2;
      letter-spacing: 0em;
      font-size: 30px;
      text-align: left;
      font-weight: 400;
      font-style: normal;
      margin-bottom: 40px;
    }
    p {
      color: rgba(37, 25, 16, 1);
      line-height: 1.8;
      letter-spacing: 0em;
      font-size: 18px;
      text-align: justify;
      font-weight: 400;
      font-style: normal;
      width: 80%;
      font-family: "Libre Baskerville", serif;
    }
    .stamp {
      background-size: cover;
      background-position: center;
      background-image: url("../stamp.png");
      position: absolute;
      width: 210px;
      height: 369px;
      transform: rotate(10deg);
      right: -80px;
      top: 80px;
      @media only screen and (max-width: 768px) {
        opacity: 0.5;
      }
    }
  }
`;
export const PortfolioBottom = styled.div`
  display: grid;
  width: 100%;
  padding-bottom: 60px;
  grid-template-areas: "note1 note2 note3";
  @media only screen and (max-width: 1270px) {
    grid-template-areas:
      "note2 note3"
      "note1 note1";
  }
  @media only screen and (max-width: 768px) {
    grid-template-areas:
      "note2 note3"
      "note1 note1";
  }
  .note-1-container {
    position: relative;
    margin-left: 20px;
    height: 450px;
    grid-area: note1;
    @media only screen and (max-width: 1270px) {
      margin-left: 0;
      max-height: 300px;
    }
    @media only screen and (max-width: 768px) {
      margin-left: 0;
      max-height: 450px;
    }
  }
  .note-2-container {
    position: relative;

    height: 450px;
    grid-area: note2;
    @media only screen and (max-width: 1270px) {
      margin-left: 20px;
    }
  }
  .note-3-container {
    margin-right: 20px;
    position: relative;

    height: 450px;
    grid-area: note3;
  }
  .note-1 {
    background-size: cover;
    background-position: center;
    background-image: url("../paper.png");
    width: 100%;
    padding: 40px;
    position: absolute;
    top: 5%;
    left: 0;
    z-index: 2;
    h1 {
      color: rgba(37, 25, 16, 1);
      line-height: 0.9;
      font-size: 58px;
      text-align: center;
      font-family: "Alex Brush", cursive;
      font-weight: 400;
      font-style: normal;
      rotate: -3deg;
      margin-bottom: 20px;
      @media only screen and (max-width: 768px) {
        rotate: -7deg;
      }
    }
    p {
      font-family: "Libre Baskerville", serif;
      color: rgba(37, 25, 16, 1);
      line-height: 1.8;
      letter-spacing: 0em;
      font-size: 14px;
      text-align: justify;
      font-weight: 400;
      font-style: normal;
      rotate: -1deg;
      @media only screen and (max-width: 768px) {
        rotate: -7deg;
      }
    }
  }
  .note-2 {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url("../background.jpg");
    z-index: 2;
    left: 0;
  }
  .note-3 {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url("../background2.jpg");
    z-index: 2;
    top: 8%;
    &:before {
      content: " ";
      background-size: cover;
      background-position: center;
      background-image: url("../tape.png");
      position: absolute;
      top: 0;
      right: 0;
      rotate: 21deg;
      transform: translate(50%, -50%);
      width: 171px;
      height: 34px;
    }
    &:after {
      content: " ";
      background-size: cover;
      background-position: center;
      background-image: url("../rib.png");
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(30%);
      rotate: 180deg;
      bottom: 15px;
      width: 15px;
      height: 450px;
    }
  }
  .ink1 {
    background-size: cover;
    background-position: center;
    background-image: url("../ink_splatters-01.png");
    width: 125px;
    height: 125px;
    position: absolute;
    left: -100px;
    bottom: -100px;
    z-index: 1;
    rotate: 21deg;
    @media only screen and (max-width: 1270px) {
      left: 0px;
      bottom: 84%;
    }
  }
`;
