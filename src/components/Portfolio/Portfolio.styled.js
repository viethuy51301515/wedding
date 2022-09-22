import styled from "styled-components";

export const PortfolioContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const PortfolioStyled = styled.div`
  width: 100%;
  background-image: url("background.png");
  position: relative;
`;

export const PortfolioTop = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  > div:nth-child(1) {
    position: relative;
    width: 400px;
    height: 600px;
    .profile {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -45px;
      z-index: 2;
      transform-style: preserve-3d;
      &:before {
        content: " ";
        background-size: cover;
        background-position: center;
        background-image: url("paper2.png");
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
    margin-top: 50px;
    position: relative;
    h1 {
      color: rgba(37, 25, 16, 1);
      line-height: 1.2;
      letter-spacing: 0em;
      font-size: 36px;
      text-align: left;
      font-weight: 400;
      font-style: normal;
      margin-bottom: 40px;
    }
    p {
      color: rgba(37, 25, 16, 1);
      line-height: 1.8;
      letter-spacing: 0em;
      font-size: 20px;
      text-align: justify;
      font-weight: 400;
      font-style: normal;
      width: 80%;
      font-family: "Libre Baskerville", serif;
    }
    .stamp {
      background-size: cover;
      background-position: center;
      background-image: url("stamp.png");
      position: absolute;
      width: 210px;
      height: 369px;
      transform: rotate(10deg);
      right: -80px;
      top: 80px;
    }
  }
`;
export const PortfolioBottom = styled.div`
  height: 500px;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  .note-content {
    position: relative;
  }
  .note-1 {
    background-size: cover;
    background-position: center;
    background-image: url("paper.png");
    width: 400px;
    padding: 40px;
    position: absolute;
    left: -350px;
    top: 5%;
    transform: translateX(-50%);
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
    }
  }
  .note-2 {
    position: absolute;
    width: 300px;
    height: 450px;
    background-size: cover;
    background-position: center;
    background-image: url("background.jpg");
    left: 0;
    transform: translateX(-50%);
  }
  .note-3 {
    position: absolute;
    width: 300px;
    height: 450px;
    background-size: cover;
    background-position: center;
    background-image: url("background2.jpg");
    z-index: 2;
    top: 8%;
    left: 250px;
    transform: translateX(-50%);
    &:before {
      content: " ";
      background-size: cover;
      background-position: center;
      background-image: url("tape.png");
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
      background-image: url("rib.png");
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(-50%);
      bottom: 15px;
      width: 15px;
      height: 450px;
    }
  }
`;
