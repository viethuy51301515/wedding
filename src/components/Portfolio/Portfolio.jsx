import React from "react";
import {
  PortfolioStyled,
  PortfolioContainer,
  PortfolioTop,
  PortfolioBottom,
} from "./Portfolio.styled";
import PictureFrame from "../pictureFrame/PictureFrame";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const {about,data} = useSelector(state => state);
  return (
    <PortfolioContainer>
        <PortfolioStyled className="contain">
            <PortfolioTop>
              <div>
                  <PictureFrame className='profile' backgroundImg={about[0]}/>
              </div>
              <div>
                <h1>
                {data.Introduction?.title}
                </h1>
                <p>
                {data.Introduction?.description}
                </p>
                <div className="stamp" />
              </div>
            
            </PortfolioTop>
            <PortfolioBottom>
                <div className="note-1-container"> 
                  <div className="note-1">
                    <h1>  {data.Introduction?.title2}</h1>
                    <p>
                    {data.Introduction?.description2}
                    </p>
                  </div>
                </div>
                <div className="note-2-container">
                  <div className="note-2" style={{backgroundImage:`url(${about[1]})`}} />
                </div>
                <div className="note-3-container">              
                  <div className="note-3" style={{backgroundImage:`url(${about[2]})`}} />
                  <div className="ink1" />
                </div>
            </PortfolioBottom>
        </PortfolioStyled>
    </PortfolioContainer>
  );
};

export default Portfolio;
