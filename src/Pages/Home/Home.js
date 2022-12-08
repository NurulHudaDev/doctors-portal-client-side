import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Footer from './Footer';
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
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    )
}

export default Home;