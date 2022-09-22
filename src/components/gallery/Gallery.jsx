import React from 'react';
import PictureFrame from '../pictureFrame/PictureFrame';
import { GalleryStyled } from './Gallery.styled';

const Gallery = ()=>{
    return <GalleryStyled>
        <PictureFrame caption={'Life Style'} width="350px" height="400px"/>
        <PictureFrame caption={'Life Style'} width="350px" height="400px"/>
        <PictureFrame caption={'Life Style'} width="350px" height="400px"/>
    </GalleryStyled>
}

export default Gallery;