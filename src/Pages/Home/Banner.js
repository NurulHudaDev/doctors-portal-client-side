import React from 'react';
import Chair from '../../assets/images/chair.png';
import MainButton from '../Shared/MainButton';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen px-12">
                <div class="hero-content flex-col lg:flex-row-reverse gap-56">
                    <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <MainButton>GET STARTED</MainButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;