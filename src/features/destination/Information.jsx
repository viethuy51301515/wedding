import React from 'react';
import { InformationLeft, InformationRight, InformationStyed } from './Information.styled';
import InformationLine from './InformationLine';

const Information = ({backgroundImg1,backgroundImg2,content =[],description,name}) =>{
    const contentNumber = [
       "one","two","three","four","five","six"
    ]
    return <InformationStyed>
      <InformationLeft>
        {content.map( (item,index) => <InformationLine key={index+item} no={contentNumber[index]} text={item}/>)}
      </InformationLeft>
        <InformationRight>
            <div style={{backgroundImage:`url(${backgroundImg1})`}}></div>
            <div style={{backgroundImage:`url(${backgroundImg2})`}}></div>
            <div>
                <p>{description}</p>
                <h3>{name}</h3>
            </div>
        </InformationRight>

    </InformationStyed>
}
export default Information;