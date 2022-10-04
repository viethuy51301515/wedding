import styled from "styled-components";

export const InformationStyed = styled.div`
  background-image: url("../background.png");
  padding-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const InformationRight = styled.div`
  position: relative;
  width: 420px;
  height: 585px;
  div:nth-child(1) {
    background-image: url("../background2.jpg");
    background-size: cover;
    background-position: center;
    width: 250px;
    height: 350px;
    position: absolute;
    z-index: 2;
  }
  div:nth-child(2) {
    background-image: url("../background.jpg");
    background-size: cover;
    background-position: center;
    width: 250px;
    height: 350px;
    position: absolute;
    rotate: -3deg;
    left: 50%;
    top: 10%;
    z-index: 3;
    :before {
      content: " ";
      position: absolute;
      top: -10px;
      left: 0;
      bottom: -10px;
      width: 30px;
      background-image: url("../golden-tape-3.png");
      background-size: cover;
      background-position: center;
      z-index: 4;
    }
    :after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("../ink_splatters-02.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      z-index: 4;
      rotate: -123deg;
    }
  }
  div:nth-child(3) {
    width: 100%;
    position: absolute;
    background-color: rgba(250, 243, 237, 1);
    top: 0;
    transform: translate(0, 100%);
    rotate: 2deg;
    padding: 120px 20px 20px 20px;
    z-index: 1;
    p {
      color: rgba(37, 25, 16, 1);
      line-height: 1.8;
      letter-spacing: 0em;
      font-size: 14px;
      text-align: justify;
      font-family: "Libre Baskerville";
      font-weight: 400;
      font-style: normal;
    }
  }
`;
export const InformationLeft = styled.div`
  padding-top: 60px;
  margin: 0 20px;
`;
export const InformationLineStyled = styled.div`
  display:flex;
  justify-content:center;
  align-items:flex-start;
  margin-bottom:30px;
  
  h1:nth-child(1) {
    line-height: 1.2;
    letter-spacing: 0em;
    font-size: 28px;
    font-family: "Sen", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: rgba(37, 25, 16, 1);
    text-align:right;
    width:100px;
  }
  h3:nth-child(2) {
    color: rgba(37,25,16,1);
    text-transform: uppercase;
    line-height: 2.2;
    letter-spacing: 0.1em;
    font-size: 14px;
    text-align: left;
    font-family: "Sen", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  }
`;

export const DestinationTagStyled = styled.div`
  width: 100vw;
  height: 100px;
  background-color: rgba(108, 134, 133, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: rgba(255, 255, 255, 1);
    font-size: 28px;
    text-align: center;
    font-family: "Sen", sans-serif;
    font-weight: 400;
    font-style: normal;
    max-width: 300px;
    span {
      color: rgba(255, 255, 255, 1);
      line-height: 0.6;
      font-size: 40px;
      font-family: "Alex Brush", cursive;
      font-weight: 400;
      font-style: normal;
    }
  }
`;
export const InvitationStyled = styled.div`
  background-image: url("../background.png");
  padding: 50px 100px 50px 100px;
  @media only screen and (max-width: 768px) {
    padding: 50px 50px 50px 50px;
  }
  .form-fields {
    width: 100%;
    margin-bottom: 15px;
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 400;
    }
    input[type="text"] {
      outline: none;
      width: 100%;
      color: #292929;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 400;
      height: 34px;
      padding: 6px 12px;
      border: 1px solid #ccc;
      background-color: #fff;
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
      :focus {
        border-color: #843534;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 6px #ce8483;
      }
    }
  }
  input[type="submit"] {
    color: white;
    background-color: #3fcfcb;
    border-color: #3fcfcb;
    margin-bottom: 5px;
    margin-left: 5px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    border: 1px solid transparent;
  }
`;
