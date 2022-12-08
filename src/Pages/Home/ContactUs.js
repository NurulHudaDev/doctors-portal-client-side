import React from 'react';
import appointment2 from '../../assets/images/appointment2.png';
import MainButton from '../Shared/MainButton';

const ContactUs = () => {

    return (
        <section style={{ background: `url(${appointment2})` }} className='flex justify-center items-center mt-28 w-full h-96'>

            <div class="card flex-shrink-0 w-full max-w-sm mt-5">
                <div className='text-center'>
                    <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
                    <h2 className='text-3xl text-white'>Stay connected with us</h2>
                </div>
                <div class="card-body">
                    <div class="form-control">
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <input type="text" placeholder="Subject" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <textarea type="text" placeholder="Your message" class="input input-bordered" ></textarea>
                    </div>
                    <div class="mt-4 text-center">
                        <MainButton>Submit</MainButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;