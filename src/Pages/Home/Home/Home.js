import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSec from '../ExtraSec/ExtraSec';
import Summery from '../Summery/Summery';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExtraSec></ExtraSec>
            <Tools></Tools>
            <Summery></Summery>
        </div>
    );
};

export default Home;