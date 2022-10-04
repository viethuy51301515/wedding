import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StoryContainer,StoryImageSlider,StoryImageContent } from "./Story.styled";
const Story = ()=>{
    const {stories,data} = useSelector(state => state);
    const dataItem = data.stories ? data.stories?.map( (item,index) => {
        let imgIndex = index >= stories.length ? stories.length - 1 : index;
        return {
            content:item.description,
            name:item.name,
            image:stories[imgIndex]
        }
    }).filter(item => !!item) :[] ;
    const [currentPage,setCurrentPage] = useState(0);

    const goRight = ()=>{
        setCurrentPage(currentPage === dataItem.length - 1 ? 0 : currentPage+1);
    }

    const goLeft = ()=>{
        setCurrentPage(currentPage === 0 ? dataItem.length - 1 : currentPage -1);
    }
    return dataItem.length > 0 && <StoryContainer>
        <StoryImageSlider imageSrc={dataItem[currentPage].image}>
            <div className="ink" />
        </StoryImageSlider>
        <div className="story-content-2">
            <StoryImageContent>
                <div>
                    <p>{dataItem[currentPage].content}</p>
                    <h3>-{dataItem[currentPage].name}</h3>
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