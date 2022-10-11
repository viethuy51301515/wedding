import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ClickMe from "./ClickMe";

import { EventItem, EventItemContent, EventItemImage, EventStyled } from "./Event.styled";
import { useState } from "react";
import ToastComponent from "../Toast/Toast";

const EventItemComponent = ({item}) => {
  const [show,setShow]= useState(false);
  return <Link key={item.url} onClick={ () => {setShow(true)}}>
          <EventItem >
            { item.url === "prewedding"  && <ClickMe />}
            <EventItemImage>
              <div>
                <div className="event-image" style={{backgroundImage:`url(${item.image})`}}></div>
              </div>
            </EventItemImage>
            <EventItemContent>
              {
                item.url === "prewedding" ? <>                    
                  <h2>Private Ceremony</h2>
                  <h3>Da Lat | 10.12.2022 4 PM</h3>
                </> : item.url === "ceremony" ? <>                    
                  <h2>Lễ Thành Hôn</h2>
                  <h3>Tư gia | 17.12.2022 8 AM</h3>
                </> : <>                    
                  <h2>Tiệc Cưới</h2>
                  <h3>Gala Center | 17.12.2022 6 PM</h3>
                </>
              }

            </EventItemContent>
            <ToastComponent show={show} setShow={setShow} content={"Sự kiện chưa diễn ra bạn nhé !!"}/>
          </EventItem>
        </Link>
}
const Event = () => {
  const placesImages = useSelector(state => state.places);
  
  const data = [
    {
      name:"",
      url:"prewedding",
      image:placesImages['prewedding'][4],
    },
    {
      name:"",
      url:"ceremony",
      image:placesImages['ceremony'][4],
    }, 
    {
      name:"",
      url:"wedding",
      image:placesImages['wedding'][4],
    }
  ]
  return <EventStyled>
          {data.map(item => 
              (
                item.url === "prewedding" ? 
                <Link key={item.url} to={`/destination/${item.url}`} >
                  <EventItem >
                    { item.url === "prewedding"  && <ClickMe />}
                    <EventItemImage>
                      <div>
                        <div className="event-image" style={{backgroundImage:`url(${item.image})`}}></div>
                      </div>
                    </EventItemImage>
                    <EventItemContent>
                      {
                        item.url === "prewedding" ? <>                    
                          <h2>Private Ceremony</h2>
                          <h3>Da Lat | 10.12.2022 4 PM</h3>
                        </> : item.url === "ceremony" ? <>                    
                          <h2>Lễ Thành Hôn</h2>
                          <h3>Tư gia | 17.12.2022 8 PM</h3>
                        </> : <>                    
                          <h2>Tiệc Cưới</h2>
                          <h3>Gala Center | 17.12.2022 6 PM</h3>
                        </>
                      }

                    </EventItemContent>
                  </EventItem>
                </Link>
               : <EventItemComponent  item={item}/> 
              )
              
          )}

      </EventStyled>;
};

export default Event;
