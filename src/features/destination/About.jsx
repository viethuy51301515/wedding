import React from 'react';
import { AboutImageStyled, AboutStyed, LinkArrow } from './About.styled';

const About = () =>{
    return <AboutStyed>
        <div className='about__content'>
            <h1>Capital H E double hockey sticks YES<br /> <span>you made it!</span></h1>
        </div>
        <div className='about__content'>
            <p>I legit have the biggest smile on my face right now.</p>
            <p>I am an easy going, to the point,            kinda person and believe my booking process should be too (you're welcome hehe). Since we've already cleared up a lot of the questions you may have had, the rest is pretty dang on simple.</p>
        </div>
        <AboutImageStyled />
        <LinkArrow>
            <img src="/rough_arrow_9.png" alt="arrow" />
        </LinkArrow>
    </AboutStyed>
}
export default About;