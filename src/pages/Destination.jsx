import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Footer, Header, Tag } from '../components';
import About from '../features/destination/About';
import DestinationTag from '../features/destination/DestinationTag';
import Information from '../features/destination/Information';
import Invitation from '../features/destination/Invitation';

const Destination = () =>{
    const params = useParams();
    const images = useSelector(state => state.places)[params.name];
    return <div>
        <Tag />
        <Header imageUrl={images[0]}/>
        <About aboutImg={images[1]} />
        <Information backgroundImg1={images[2]}
backgroundImg2={images[3]} />
        <DestinationTag />
        <Invitation />
        <Footer />
    </div>
}

export default Destination;