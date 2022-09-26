import React from 'react';
import { Link } from 'react-router-dom';
import PictureFrame from '../pictureFrame/PictureFrame';
import { GalleryStyled } from './Gallery.styled';

const Gallery = ()=>{
    return <GalleryStyled>
        <Link to="/album?pre_wedding">
            <PictureFrame className={'gallery-card gallery-card__1'} caption={'Life Style'} width="350px" height="400px"/>
        </Link>
        <Link to="/album?pre_wedding">
            <PictureFrame className={'gallery-card gallery-card__2'} caption={'Life Style'} width="350px" height="400px"/>
        </Link>
        <Link to="/album?pre_wedding">
            <PictureFrame className={'gallery-card gallery-card__3'} caption={'Life Style'} width="350px" height="400px"/>
        </Link>
    </GalleryStyled>
}

export default Gallery;