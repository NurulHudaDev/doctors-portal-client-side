import React from 'react';
import InfoCard from './InfoCard';
import Clock from '../../assets/icons/clock.svg';
import Marker from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle='Opening Hours' cardDescription='Lorem Ipsum is simply dummy text of the pri' img={Clock} bgClass='bg-gradient-to-r from-secondary to-primary text-sm'></InfoCard>
            <InfoCard cardTitle='Visit our location' cardDescription='Brooklyn, NY 10036, United States' img={Marker} bgClass='bg-accent text-sm'></InfoCard>
            <InfoCard cardTitle='Contact us now' cardDescription='+000 123 456789' img={Phone} bgClass='bg-gradient-to-r from-secondary to-primary text-sm'></InfoCard>
        </div>
    )
}

export default Info;