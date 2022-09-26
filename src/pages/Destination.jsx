import React from 'react';
import { Header, Tag } from '../components';
import About from '../features/destination/About';
import DestinationTag from '../features/destination/DestinationTag';
import Information from '../features/destination/Information';
import Invitation from '../features/destination/Invitation';

const Destination = () =>{
    return <div>
        <Tag />
        <Header />
        <About />
        <Information />
        <DestinationTag />
        <Invitation />
    </div>
}

export default Destination;