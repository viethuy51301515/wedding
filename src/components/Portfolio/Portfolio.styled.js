import styled from "styled-components";

export const PortfolioContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const PortfolioStyled = styled.div`
  width: 100%;
  height: 783px;
  background-image: url("bg.jpg");
  position: relative;
  > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const InforStyled = styled.div`
  width: 400px;
  height: 540px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -50%);
  padding: 7px;
  background-color: rgba(245, 245, 245, 1);
`;

export const InforContent = styled.div`
  border: 1px solid rgba(189, 188, 188, 1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  transition: 1s all ease;
  .pf-img {
    height: 110px;
    width: 80px;
    background-image: url("logo.png");
    background-size: cover;
    background-position: center;
  }
  .pf-head h3 {
    text-transform: none;
    letter-spacing: 0em;
    font-size: 40px;
    text-align: center;
    font-family: "Alex Brush", cursive;
    font-weight: 400;
    font-style: normal;
    line-height: 1.2;
  }

  .pf-title h2 {
    color: rgba(57, 51, 46, 1);
    text-transform: uppercase;
    line-height: 1.6;
    letter-spacing: 0.2em;
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    font-style: normal;
    font-family: "Aboreto", cursive;
  }
  .pf-description {
    width: 70%;
    p {
      color: rgba(57, 51, 46, 1);
      line-height: 1.5;
      font-size: 14px;
      text-align: center;
      font-weight: 400;
      font-style: normal;
      font-family: "Quicksand";
      letter-spacing: 0.1em;
    }
  }
`;

export const InforImage = styled.div`
  position: absolute;
  width: 400px;
  height: 640px;
  top: 50%;
  right: 50%;
  transform: translate(90%, -55%);
  border-top-right-radius: 30%;
  border-top-left-radius: 30%;
  overflow: hidden;
  div {
    width: 100%;
    height: 100%;
    background-image: url("profile.png");
    background-size: cover;
    background-position: center;
  }
`;

const NextPrevButton = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
`;
export const NextButton = styled(NextPrevButton)`
  right: 10px;
`;
export const PrevButton = styled(NextPrevButton)`
  left: 10px;
  transform: scale(-1);
`;
