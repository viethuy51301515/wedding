import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PictureFrame from '../pictureFrame/PictureFrame';
import { GalleryStyled } from './Gallery.styled';

const Gallery = ()=>{
    const gallery = useSelector(state => state.gallery)
    return <GalleryStyled>
        <a href=''>
            <PictureFrame  backgroundImg={gallery.prewedding[0]} className={'gallery-card gallery-card__1'} caption={'Da Lat Private Ceremony'} width="350px" height="400px"/>
        </a>
        <a>
            <PictureFrame backgroundImg={gallery.ceremony[0]} className={'gallery-card gallery-card__2'} caption={'Wedding Ceremony'} width="350px" height="400px"/>
        </a>
        <a href='https://drive.google.com/drive/u/0/folders/1l6DRDc8h5Qrl4qybtFC4LvTj7SrMs65T'>
            <PictureFrame backgroundImg={gallery.wedding[0]} className={'gallery-card gallery-card__3'} caption={'Wedding Night'} width="350px" height="400px"/>
        </a>
    </GalleryStyled>
}

export default Gallery;