import styled from "styled-components";

export const CountDownStyled = styled.div`
  height: 150px;
  width: 100%;
  background-color: rgba(57, 51, 46, 1);
  position: relative;
`;
export const CountDownBackground = styled.div`
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
export const CountDownContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;
export const CountDownTitle = styled.div`
  margin-right: 50px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  h2 {
    font-size: 30px;
    font-family: "Aboreto", cursive;
    color: white;
    span {
      font-size: 20px;
      display: block;
      margin-bottom: 10px;
      color: white;
    }
  }
`;

export const CountDownTimerStyled = styled.div`
  display: flex;

  > div {
    text-align: center;
    width: 100px;
    font-family: "Dosis", sans-serif;
    font-size: 3rem;
    color: white;
    div {
      font-weight: 600;
      line-height: 1em;
      font-size: 3rem;
    }
    span {
    }
  }
`;
