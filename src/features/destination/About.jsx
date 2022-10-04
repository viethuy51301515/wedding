import React from 'react';
import { AboutImageStyled, AboutStyed, LinkArrow } from './About.styled';

const About = ({aboutImg,title1,title2,content1,content2}) =>{
    return <AboutStyed>
        <div className='about__content'>
            <h1>{title1}<br /> <span>{title2}</span></h1>
        </div>
        <div className='about__content'>
            <p>{content1}</p>
            <p>{content2}</p>
        </div>
        <AboutImageStyled backgroundImg={aboutImg} />
        <LinkArrow>
            <img src="/rough_arrow_9.png" alt="arrow" />
        </LinkArrow>
    </AboutStyed>
}
export default About;