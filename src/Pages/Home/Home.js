import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import TeethTreatment from './TeethTreatment';

const Home = () => {
    return(
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <TeethTreatment></TeethTreatment>
            <Appointment></Appointment>
        </div>
    )
}

export default Home;