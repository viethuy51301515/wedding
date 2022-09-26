import React from "react";
import { Link } from "react-router-dom";
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
    <Link to="/destination?pre_wedding">
        <EventItem>
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
      </Link>
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
