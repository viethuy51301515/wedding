import React from "react";
import { StoryContainer,StoryImageSlider,StoryImageContent } from "./Story.styled";

const Story = ()=>{
    return <StoryContainer>
        <StoryImageSlider>
            <div className="ink" />
        </StoryImageSlider>
        <div className="story-content-2">
            <StoryImageContent>
                <div>
                    <p>"My fiance and I LOVE Ashley. When we were looking for a wedding photographer, we were incredibly picky and were focused on finding someone who would make us feel comfortable. Ashley had amazing communication with us from the very start, and during the shoot she made it so fun and easy. It truly felt like a date night with the two of us and not one second of it felt awkward. Her photos are beautiful and she captured our relationship so perfectly."</p>
                    <h3>-JEN</h3>
                </div>
                <div>
                    I'm Here For It Sis
                </div>
                {/* <div className="content__title">
                    <h2>kindest words from the sweetest people</h2>
                </div>    */}
                <div className="arrow" />
                <img src="right_arrow.png" alt="right" className="right-arrow" />
                <img src="left_arrow.png" alt="left" className="left-arrow" />
            </StoryImageContent>

        </div>
    </StoryContainer>
} 

export default Story;