import React from 'react';
import { InformationLineStyled } from './Information.styled';

const InformationLine = ({no,text}) => {
    return <InformationLineStyled>
        <h1>
            {no}.
        </h1>
        <h3>
            {text}
        </h3>
    </InformationLineStyled>
}

export default InformationLine;