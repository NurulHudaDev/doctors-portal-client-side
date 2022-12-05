import React from 'react';
import InfoCard from './InfoCard';
import Clock from '../../assets/icons/clock.svg';
import Marker from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle='Opening Hours' img={Clock}></InfoCard>
            <InfoCard cardTitle='Visit our location' img={Marker}></InfoCard>
            <InfoCard cardTitle='Contact us now' img={Phone}></InfoCard>
        </div>
    )
}

export default Info;