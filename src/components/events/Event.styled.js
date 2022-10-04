import styled from "styled-components";

export const EventStyled = styled.div`
  background-image: url("../background.png");
  padding: 120px 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const EventItem = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  filter: grayscale(0.3);
  transition: 0.5s all;
  :hover {
    filter: grayscale(0);
    .event-image {
      transform: scale(1.2);
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
    }
  }
`;

export const EventItemContent = styled.div`
  max-width: 100%;
  background-color: rgba(181, 155, 131, 1);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 10px 20px 10px;
  top: 50%;
  > img {
    max-width: 100%;
    height: auto;
  }
`;

export const EventItemImage = styled.div`
  width: 100%;
  height: 60%;
  padding: 0 10%;
  position: absolute;
  top: 10%;
  z-index: 1;
  > div {
    width: 100%;
    height: 100%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    overflow: hidden;
    > div {
      transition: 0.5s all;
      background-image: url("../timeline.jpg");
      background-size: cover;
      background-position: center;
      height: 100%;
      width: 100%;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
    }
  }
`;

export const ClickMeStyled = styled.div`
  position: absolute;
  left: -20px;
  z-index: 2;
  h1 {
    font-family: "Alex Brush", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 40px;
  }
  img {
    height: 50px;
  }
`;
