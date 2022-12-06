import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import TeethTreatment from './TeethTreatment';

const Home = () => {
    return(
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <TeethTreatment></TeethTreatment>
        </div>
    )
}

export default Home;