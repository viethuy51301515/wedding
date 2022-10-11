import React from 'react';
import { DestinationTagStyled } from './Information.styled';

const DestinationTag = ({no,text}) => {
    return <DestinationTagStyled>
        <h1>RSVP </h1>
        <span>Vui lòng điền form dưới đây trước ngày 20/11/2022 để Huy và Thảo có thể chuẩn bị chu đáo trong ngày đặc biệt sắp tới nhé!</span>
    </DestinationTagStyled>
}

export default DestinationTag;