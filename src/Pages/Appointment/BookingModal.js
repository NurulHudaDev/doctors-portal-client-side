import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment }) => {

    const {_id, name, slots } = treatment
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-center mb-4">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input w-full max-w-xs border border-slate-300" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option 
                                key={index} 
                                value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input w-full max-w-xs border border-slate-300" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input w-full max-w-xs border border-slate-300" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input w-full max-w-xs border border-slate-300" />
                        <input type="submit" pvalue="submit" className="btn btn-secondary w-full max-w-xs border border-slate-300" />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default BookingModal;