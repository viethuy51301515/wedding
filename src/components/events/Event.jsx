import React from "react";
import { useModalContext } from "../context/modalContext";
import ClickMe from "./ClickMe";
import { EventItem, EventItemContent, EventItemImage, EventStyled } from "./Event.styled";

const Event = () => {
  const {showModal} = useModalContext();
  const openPreWedding = ()=>{
    showModal("REGISTER_PRE_WEDDING");
  }
  const openForm = ()=>{
    showModal("WEDDING");
  }
  return <EventStyled>
      <EventItem onClick={openPreWedding}>
        <ClickMe />
        <EventItemImage>
          <div>
            <div className="event-image"></div>
          </div>
        </EventItemImage>
        <EventItemContent>
          <img src="/title.png" alt='profile'/> 
        </EventItemContent>
      </EventItem>
      <EventItem onClick={openForm}>
        <EventItemImage>
          <div>
            <div className="event-image"></div>
          </div>
        </EventItemImage>
        <EventItemContent>
          <img src="/title.png" alt='profile'/> 
        </EventItemContent>
      </EventItem>
      <EventItem>
        <EventItemImage>
          <div>
            <div className="event-image"></div>
          </div>
        </EventItemImage>
        <EventItemContent>
          <img src="/title.png" alt='profile'/> 
        </EventItemContent>
      </EventItem>
      </EventStyled>;
};

export default Event;
