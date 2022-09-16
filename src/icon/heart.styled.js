import styled, { css } from "styled-components";

export const HeartStyled = styled.div`
  ${(props) => {
    if (props.position === "left") {
      return css`
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
      `;
    } else {
      return css`
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
      `;
    }
  }}
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #9cc2bb;
  border: 1px solid #80b0a6;
  z-index: 3;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
`;
