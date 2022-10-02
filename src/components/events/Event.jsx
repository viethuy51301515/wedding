import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ClickMe from "./ClickMe";
import { EventItem, EventItemContent, EventItemImage, EventStyled } from "./Event.styled";

const Event = () => {
  const placesImages = useSelector(state => state.places);
  const data = [
    {
      name:"",
      url:"prewedding",
      image:placesImages['prewedding'][0],
    },
    {
      name:"",
      url:"ceremony",
      image:placesImages['ceremony'][0],
    }, 
    {
      name:"",
      url:"wedding",
      image:placesImages['wedding'][0],
    }
  ]
  return <EventStyled>
          {data.map(item => 
              <Link to={`/destination/${item.url}`} style={{pointerEvents:item.url !== "prewedding" && "none"}}>
                <EventItem>
                  { item.url === "prewedding"  && <ClickMe />}
                  <EventItemImage>
                    <div>
                      <div className="event-image" style={{backgroundImage:`url(${item.image})`}}></div>
                    </div>
                  </EventItemImage>
                  <EventItemContent>
                    <img src="/title.png" alt='profile'/> 
                  </EventItemContent>
                </EventItem>
              </Link>
          )}
      </EventStyled>;
};

export default Event;
