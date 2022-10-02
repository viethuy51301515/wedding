import styled from "styled-components";

export const TagStyled = styled.div`
  width: 120px;
  height: 150px;
  position: fixed;
  left: 10px;
  z-index: 100;
  @media (max-width: 768px) {
    width: 80px;
    height: 100px;
  }
  div:nth-child(1) {
    background-image: url("../logo.jpg");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: calc(100% - 32px);
  }
  div:nth-child(2) {
    width: 100%;
    height: 40%;
    background: transparent;
    position: relative;
    ::before {
      content: "";
      position: absolute;
      top: 0;
      width: 0;
      height: 0;
      border-top: 60px solid white;
      border-left: 60px solid transparent;
      border-right: 60px solid transparent;
      @media (max-width: 768px) {
        border-top: 40px solid white;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
      }
    }
  }
`;
