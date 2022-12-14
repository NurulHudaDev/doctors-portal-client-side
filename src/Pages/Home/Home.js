import React from 'react';
import MakeAppointment from './MakeAppointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';
import TeethTreatment from './TeethTreatment';
import Testimonials from './Testimonials';

const Home = () => {
    return(
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <TeethTreatment></TeethTreatment>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    )
}

export default Home;