import React from 'react';
import Banner from '../Banner/Banner';
import Summery from '../Summery/Summery';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summery></Summery>
        </div>
    );
};

export default Home;