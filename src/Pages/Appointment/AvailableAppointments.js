import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServiceAvailable from './ServiceAvailable';


const AvailableAppointments = ({ date }) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h2 className='text-xl text-secondary text-center'>AvailableAppointments on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    services.map(service =><ServiceAvailable
                    key={service._id}
                    service={service}
                    ></ServiceAvailable>)
                }
            </div>
        </div>
    )
}

export default AvailableAppointments;