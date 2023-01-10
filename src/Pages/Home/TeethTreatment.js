import React from 'react';
import Treatment from '../../assets/images/treatment.png';
import MainButton from '../Shared/MainButton';

const TeethTreatment = () => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Treatment} className="w-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <MainButton>GET STARTED</MainButton>
                </div>
            </div>
        </div>
    )
}

export default TeethTreatment;