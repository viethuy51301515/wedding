import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Footer, Header, Tag } from '../components';
import About from '../features/destination/About';
import DestinationTag from '../features/destination/DestinationTag';
import Information from '../features/destination/Information';
import Invitation from '../features/destination/Invitation';

const Destination = () =>{
    
    const params = useParams();
    const {places,data} = useSelector(state => state);
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    const images = places[params.name];
    const currentData = !!data['places'] ?  data['places'][params.name] : {};
    
    return <div>
        <Tag />
        <Header imageUrl={images[0]} title={currentData.header?.title1} content={currentData.header?.title2} />
        <About aboutImg={images[1]} 
            title1={currentData.description?.title1} 
            title2={currentData.description?.title2} 
            content1={currentData.description?.content1} 
            content2={currentData.description?.content2} 
        />
        <Information backgroundImg1={images[2]}
backgroundImg2={images[3]} 
content={currentData.programs}
description={currentData.article?.description}
name={currentData.article?.name}/>
        <DestinationTag />
        <Invitation />
        <Footer />
    </div>
}

export default Destination;