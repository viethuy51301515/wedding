import React from "react";
import { useSelector } from "react-redux";
import { FooterStyled } from "./Footer.styled";

const Footer = () => {
  const store = useSelector((state) => state);
  return <FooterStyled bkImage={store.footer}>

  </FooterStyled>;
};

export default Footer;
