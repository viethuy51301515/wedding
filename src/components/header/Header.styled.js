import styled from "styled-components";

export const HeaderStyled = styled.div`
  color: white;
  height: 100vh;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  background: rgba(26, 26, 26, 1);
`;

export const HeaderImage = styled.div`
  background-image: url("${(props) => props.backgroundImg}");
  opacity: 0.4;
  background-size: cover;
  background-position: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const HeaderContent = styled.div`
  text-shadow: 1px 1px 3px black;
  z-index: 1;
  text-align: center;

  h1 {
    font-size: 65px;
    font-weight: 400;
    font-style: normal;
    color: white;
  }
  h2 {
    color: white;
  }
`;
