import React from 'react';
import { InformationLeft, InformationRight, InformationStyed } from './Information.styled';
import InformationLine from './InformationLine';

const Information = ({backgroundImg1,backgroundImg2}) =>{
    const content = [
        {
            no:"one",
            text:"FILL OUT THE FORM BELOW AS BEST YOU CAN WITH WHAT APPLIES TO YOU."
        },
        {
            no:"two",
            text:"FILL OUT THE FORM BELOW AS BEST YOU CAN WITH WHAT APPLIES TO YOU."
        },
        {
            no:"three",
            text:"FILL OUT THE FORM BELOW AS BEST YOU CAN WITH WHAT APPLIES TO YOU."
        },
        {
            no:"four",
            text:"FILL OUT THE FORM BELOW AS BEST YOU CAN WITH WHAT APPLIES TO YOU."
        },
        {
            no:"five",
            text:"FILL OUT THE FORM BELOW AS BEST YOU CAN WITH WHAT APPLIES TO YOU."
        },
        {
            no:"six",
            text:"FILL OUT THE FORM BELOW AS BEST YOU CAN WITH WHAT APPLIES TO YOU."
        },
         {
            no:"seven",
            text:"FILL OUT THE FORM BELOW AS BEST YOU CAN WITH WHAT APPLIES TO YOU."
        },
    ]
    return <InformationStyed>
      <InformationLeft>
        {content.map(item => <InformationLine no={item.no} text={item.text}/>)}
      </InformationLeft>
        <InformationRight>
            <div style={{backgroundImage:`url(${backgroundImg1})`}}></div>
            <div style={{backgroundImage:`url(${backgroundImg2})`}}></div>
            <div>
                <p>xo, ashmadddI cannot wait to meet you, hug your neck, make you laugh, rattle off my best mom jokes, tell you my most embarrassing stories, show you some          dance moves, and of course give you some freakin' bomb ass photos!!! ;)</p>
                <h3>xo, ash</h3>
            </div>
        </InformationRight>

    </InformationStyed>
}
export default Information;