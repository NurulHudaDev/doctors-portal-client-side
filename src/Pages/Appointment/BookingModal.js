import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {

    const {_id, name, slots } = treatment

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-secondary text-center mb-4">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input w-full max-w-xs border border-slate-300" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input w-full max-w-xs border border-slate-300" />
                        <input type="email" name='email' placeholder="Email Addres" class="input w-full max-w-xs border border-slate-300" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input w-full max-w-xs border border-slate-300" />
                        <input type="submit" pvalue="submit" class="btn btn-secondary w-full max-w-xs border border-slate-300" />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default BookingModal;