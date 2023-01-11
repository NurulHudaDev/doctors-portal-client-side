import React from 'react';

const ServiceAvailable = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div className="card lg:mx-w-lg bg-base-100 shadow-xl items-center text-center mt-5">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No slot availabel. Try another day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions">
                    <label htmlFor="booking-modal" disabled={slots.length   === 0} onClick={() => setTreatment(service)} className="btn btn-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
        
    )
}

export default ServiceAvailable;