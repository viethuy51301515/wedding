import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StoryContainer,StoryImageSlider,StoryImageContent } from "./Story.styled";
const Story = ()=>{
    const stories = useSelector(state => state.stories);
    const data = [{
        image:stories[0],
        content:"My fiance and I LOVE Ashley. When we were looking for a wedding photographer, we were incredibly picky and were focused on finding someone who would make us feel comfortable. Ashley had amazing communication with us from the very start, and during the shoot she made it so fun and easy. It truly felt like a date night with the two of us and not one second of it felt awkward. Her photos are beautiful and she captured our relationship so perfectly.",
        name:"HUY"
    },
    {
        image:stories[1],
        content:"12321312321",
        name:"Thao"
    }]
    const [currentPage,setCurrentPage] = useState(0);

    const goRight = ()=>{
        setCurrentPage(currentPage === data.length - 1 ? 0 : currentPage+1);
    }

    const goLeft = ()=>{
        setCurrentPage(currentPage === 0 ? data.length - 1 : currentPage -1);
    }
    return <StoryContainer>
        <StoryImageSlider imageSrc={data[currentPage].image}>
            <div className="ink" />
        </StoryImageSlider>
        <div className="story-content-2">
            <StoryImageContent>
                <div>
                    <p>{data[currentPage].content}</p>
                    <h3>-{data[currentPage].name}</h3>
                </div>
                <div>
                    I'm Here For It Sis
                </div>
                {/* <div className="content__title">
                    <h2>kindest words from the sweetest people</h2>
                </div>    */}
                <div className="arrow" />
                <img src="right_arrow.png" alt="right" className="right-arrow" onClick={goRight}/>
                <img src="left_arrow.png" alt="left" className="left-arrow" onClick={goLeft} />
            </StoryImageContent>

        </div>
    </StoryContainer>
} 

export default Story;