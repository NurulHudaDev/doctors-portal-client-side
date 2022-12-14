import React from 'react';
import Doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import MainButton from '../Shared/MainButton';

const MakeAppointment = () => {
    return (
        <section style={{background: `url(${appointment})`}} className='flex justify-center items-center mt-28 w-full'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={Doctor} alt='' />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an appointment Today</h2>
                <p className='text-white mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <MainButton>GET STARTED</MainButton>
            </div>
        </section>
    )
}

export default MakeAppointment;