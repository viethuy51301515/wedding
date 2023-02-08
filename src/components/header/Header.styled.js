import styled, { css } from "styled-components";

export const HeaderStyled = styled.div`
  color: white;
  height: 100vh;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  background: rgba(26, 26, 26, 1);

  @media only screen and (max-width: 768px) {
    height: 50vh;
  }
`;

export const HeaderImage = styled.div`
  background-image: url("${(props) => props.backgroundImg}");
  background-size: cover;
  background-position: center;
  top: 0;
  ${(props) =>
    props.isMain &&
    css`
      opacity: 0.8;
    `}
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  @media only screen and (max-width: 1180px) {
    background-position: center !important;
    background-image: url(${(props) => props.mobileImage});
    opacity: 1;
  }
`;

export const HeaderVideo = styled.div`
  background-image: url("${(props) => props.backgroundImg}");
  background-size: cover;
  background-position: center;
  top: 0;
  ${(props) =>
    props.isMain &&
    css`
      opacity: 0.8;
    `}
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  @media only screen and (max-width: 1180px) {
    background-position: center !important;
    background-image: url(${(props) => props.mobileImage});
    opacity: 1;
  }
`;

export const HeaderContent = styled.div`
  z-index: 1;
  text-align: center;
  margin-bottom: 300px;
  color: ${(props) => props.color};
  opacity:1;
  transition:2s all;
  &.hide-page{
    opacity:0;
  }
  @media only screen and (max-width: 1180px) {
    display: none;
    margin-bottom: 0;
  }
  h1 {
    font-size: 50px;
    font-weight: 400;
    font-style: normal;
    font-family: "Prata", serif;
  }
  h2:nth-child(1) {
    font-family: "Prata", serif;
  }
  span {
    font-family: "Prata", serif;
    letter-spacing: 0em;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
  }
`;
