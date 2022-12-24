import React from 'react';

const ServiceAvailable = ({service}) => {
    const {name, slots} = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl items-center text-center mt-5">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No slot availabel</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions">
                    <button disabled={slots.length   === 0} class="btn btn-secondary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
        
    )
}

export default ServiceAvailable;