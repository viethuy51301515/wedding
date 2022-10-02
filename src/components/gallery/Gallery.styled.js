import styled from "styled-components";

export const GalleryStyled = styled.div`
  width: 100%;
  background-color: rgba(41, 79, 80, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  padding: 30px 0;
  .gallery-card {
    flex-grow: 0;
    transition: 0.3s all ease;
  }
  :before {
    content: " ";
    position: absolute;
    top: 0;
    width: 100%;
    height: 30%;
    background-color: rgba(108, 134, 133, 1);
  }
  .gallery-card__1 {
    rotate: 356deg;
    position: relative;
    :hover {
      rotate: 360deg;
    }
    h3 {
      margin: 0;
    }
    &:before {
      content: " ";
      background-size: cover;
      background-position: center;
      background-image: url("../flower.png");
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-50%, 0);
      z-index: 4;
      rotate: 21deg;
      width: 120px;
      height: 120px;
    }
  }
  .gallery-card__2 {
    rotate: 1deg;
    :hover {
      rotate: 0deg;
    }
    h3 {
      margin: 0;
    }
  }
  .gallery-card__3 {
    rotate: -6deg;
    z-index: 2;
    transform-style: preserve-3d;
    :hover {
      rotate: 0deg;
    }
    h3 {
      margin: 0;
    }
    &:before {
      content: " ";
      background-size: cover;
      background-position: center;
      background-image: url("../paper3.png");
      position: absolute;
      top: 0;
      left: 20%;
      z-index: 2;
      rotate: 96deg;
      height: 100%;
      width: 100%;
      z-index: 1;
      transform: translateZ(-1px);
    }
  }
  .gallery-card__4 {
    rotate: 90deg;
    h1 {
      line-height: 1.2;
      letter-spacing: 0em;
      font-size: 34px;
      text-align: left;
      font-family: "Libre Baskerville";
      font-weight: 400;
      font-style: normal;
      margin: 0;
    }
  }
`;
