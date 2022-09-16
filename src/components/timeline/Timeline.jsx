import React from 'react';
import { TimelineData } from '../../asset/timelinedata';
import  HeartIcon  from '../../icon/heart';
import {TimeLineSectionStyled, TimelineRowContentStyled, TimelineRowImageStyled, TimelineRowStyled, TimelineStyled, TimelineTitleStyled } from './Timeline.styled';
const Timeline = ()=>{
    return(
        <TimelineStyled>
            <TimelineTitleStyled>
                <h1>Our Love Story</h1>
            </TimelineTitleStyled>
            <TimeLineSectionStyled>
            {
                TimelineData.map( (data,index) => index%2 === 0 ? 
                <TimelineRowStyled>
                <TimelineRowContentStyled position={"right"}>
                    <h1>{data.title}</h1>
                    <span>{data.date}</span>
                    <p>
                    {data.description}
                    </p>
                    <HeartIcon color='white' position={"left"}/>
                </TimelineRowContentStyled>
                <TimelineRowImageStyled>
                    <img src="/timeline.jpg" alt='profile'/> 
                </TimelineRowImageStyled>
            </TimelineRowStyled> : 
            <TimelineRowStyled>
            <TimelineRowImageStyled>
                <img src="/timeline.jpg" alt='profile'/> 
            </TimelineRowImageStyled>
            <TimelineRowContentStyled position={"left"}>
                <h1>{data.title}</h1>
                <span>{data.date}</span>
                <p>
                {data.description}
                </p>
                <HeartIcon color='white' position={"right"}/>
            </TimelineRowContentStyled>

        </TimelineRowStyled>
                )
            }
            </TimeLineSectionStyled>
        </TimelineStyled>
    )
}

export default Timeline;