import styled from "styled-components";
import { colors } from "../../utils/constant";

export const TimelineStyled = styled.div`
  background-image: url("${(props) => props.backgroundImg}");
  padding: 120px 0;
  text-align: center;
`;

export const TimelineTitleStyled = styled.div`
  margin-bottom: 60px;
  h1 {
    font-family: "Great Vibes", cursive;
    background: white;
    padding: 10px 25px 5px;
    text-transform: capitalize;
    letter-spacing: 3px;
    border-top: 2px solid ${colors.green};
    border-bottom: 2px solid ${colors.green};
    display: inline-block;
    font-size: 2rem;
    background-color: ${colors.green};
  }
`;

export const TimeLineSectionStyled = styled.div`
  font-family: "Dosis", sans-serif;
  position: relative;
  ::after {
    content: " ";
    background: white;
    width: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 50%;
    background: ${colors.green};
  }
`;
export const TimelineRowStyled = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const TimelineRowContentStyled = styled.div`
  width: 50%;
  text-align: ${(props) => props.position};

  padding: ${(props) =>
    props.position === "right" ? " 0 45px 0 100px " : " 0 100px 0 45px;"};
  position: relative;
  border-top: 1px solid ${colors.green};
  h1 {
    font-size: 3rem;
  }
  span {
    font-size: 1.5rem;
  }
  p {
    line-height: 1.8rem;
    font-size: 1.5rem;
  }
  > * {
    margin-bottom: 15px;
  }
`;
export const TimelineRowImageStyled = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 100px 0 45px;
  img {
    max-width: 100%;
    height: auto;
  }
`;
