import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  overflow-y: auto;
`;

export const ModalBackground = styled.div`
  position: ${(props) => props.position};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: ${(props) => props.opacity || "0.3"};
  background: black;
`;

export const ModalWrapper = styled.div`
  max-width: 90vw;

  position: relative;
  margin: auto;
  background-color: white;
  padding: 25px;
  border-radius: 6px;
  box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px;
`;

export const RsvpContainer = styled.div`
  text-align: center;
  h1 {
    font-size: 36px;
    line-height: 44px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 40px;
  }
  p {
    margin-bottom: 40px;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  margin: 0 auto;
  background: #fcfcfc;
  text-align: center;
`;

export const InputStyled = styled.input`
  height: 55px;
  background: #fcfcfc;
  border: 1px solid #d6d6d6;
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: -2px;
  :focus {
    outline: none;
  }
`;
