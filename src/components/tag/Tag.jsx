import React from "react";
import { Link } from "react-router-dom";
import { TagStyled } from "./Tag.styled";

const Tag = () => {
  const scrollTop =()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
    <Link to={"/"} onClick={scrollTop}>
      <TagStyled>
        <div></div>
        <div></div>
      </TagStyled>
    </Link>
  );
};

export default Tag;
