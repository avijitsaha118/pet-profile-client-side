import React from 'react';
import Banner from './Banner';
import SelectedInfo from './SelectedInfo';
import VetSections from './VetSections';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SelectedInfo></SelectedInfo>
            <VetSections></VetSections>
        </div>
    );
};

export default Home;