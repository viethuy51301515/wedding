import styled from "styled-components";

export const FooterStyled = styled.div`
  background-image: url("${(props) => props.bkImage}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1180px) {
    height: 100vh;
    background-attachment: unset;
  }
  @media (max-width: 768px) {
    height: 50vh;
    background-attachment: unset;
  }
  h1 {
    font-size: 30px;
    color: white;
    font-family: "Merriweather", serif;
  }
`;
