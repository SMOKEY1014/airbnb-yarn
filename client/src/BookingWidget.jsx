import { useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { UserContext } from "./Context/UserContext";

export default function BookingWidget({ place, setDate, setNumOfNights }) {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('0000000000');
    const [redirect, setRedirect] = useState('');
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            setName(user.name);
        }
    }, [user]);

    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0!
        const dd = String(today.getDate()).padStart(2, '0');
        const ddTom = String(today.getDate() + 1).padStart(2, '0');
        const formattedToday = `${yyyy}-${mm}-${dd}`;
        const formattedTomorrow = `${yyyy}-${mm}-${ddTom}`;

        setCheckIn(formattedToday);
        setCheckOut(formattedTomorrow);
    }, []);

    let numberOfNights = 0;
    useEffect(() => {
        if (checkIn && checkOut) {
            numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
            setNumOfNights(numberOfNights);
            console.log('entering a setDate function...', numberOfNights);
            setDate([
                {
                    startDate: new Date(checkIn),
                    endDate: new Date(checkOut),
                    key: 'selection'
                }
            ]);
            console.log('Done...');
        }
        console.log("Check in : "+checkIn)
        console.log("Check out : "+checkOut)
    }, [checkIn, checkOut, setDate]);


    async function bookThisPlace() {
        const data = {
            checkIn, checkOut, numberOfGuests,
            name, phone,
            price: (numberOfNights * place.price + 120),
            place: place._id
        };
        const response = await axios.post("/bookings", data);
        const bookingId = response.data._id;
        setRedirect(`/account/bookings`);
    }

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    return (
        <div>

       
        <div className=" flex flex-col  shadow-2xl p-4 rounded-2xl">
            <div className="flex justify-between text-2xl text-center">
                <div className="flex"><div className="font-bold">R{place.price} </div>  /night</div>
                <div className="flex text-lg  justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>

                    <div className="px-4">5.0</div>
                    <li></li>
                    <div className="underline text-lg">5 Reviews</div>
                </div>
            </div>
            <div className="border rounded-2xl mt-4">
                <div className="flex">
                    <div className=" py-3 px-4 border-b- flex-col">
                        <label className="text-sm" >CHECKIN</label>
                        <input className="text-gray-400"
                            value={checkIn} 
                            onChange={ev => setCheckIn(ev.target.value)} 
                            type="date"/>
                    </div>
                    <div className=" py-3 px-4 border-l flex-col">
                        <label className="text-sm" >CHECKOUT</label>
                        <input className="text-gray-400"
                            value={checkOut} 
                            onChange={ev => setCheckOut(ev.target.value)}
                            type="date" name="" id="" />
                    </div>
                </div>
                
                <div className="py-3 px-4 border-t">
            <label className="text-sm">GUESTS:</label>
            <select
                className="h-full w-full text-gray-400 border-transparent focus:border-white focus:outline-none"
                value={numberOfGuests}
                onChange={ev => setNumberOfGuests(ev.target.value)} >
                {[...Array(10).keys()].map(num => (
                    <option key={num + 1} value={num + 1}>
                        {num + 1} guests
                    </option>
                ))}
            </select>
        </div>
                {numberOfNights > 0 && (
                    <div className=" py-3 px-4 border-t ">
                    <label >Your Full Name :</label>
                    <input 
                        type="text" 
                        value={name} 
                            onChange={ev => setName(ev.target.value)} name="" id="" />
                        
                        <label >Phone Number :</label>
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={ev => setPhone(ev.target.value)} name="" id="" />
                </div>
                )}
            </div>      
            <button onClick={bookThisPlace} className="bg-primary p-4 mt-4 rounded-xl text-white items-center justify-center mb-4 gap-2">
                Reserve
            </button>
            <div className="flex gap-8 items-center justify-center text-gray-400 p-4">You won't be charged yet</div>
            <div className="py-1">
                <div className="flex justify-between">
                    <div>R{place.price } x {numberOfNights } Nights</div>
                    <div>R{ numberOfNights * place.price}</div>  
                </div>
            </div>
            <div className="py-1">
                <div className="flex justify-between">
                    <div>Weekly Discounts</div>
                    <div>R0.00</div>  
                </div>
            </div>
            <div className="py-1">
                <div className="flex justify-between">
                    <div>Cleaning fee</div>
                    <div>R50</div>  
                </div>
            </div>
            <div  className="py-1">
                <div className="flex justify-between">
                    <div>Service fee</div>
                    <div>R50</div>  
                </div>
            </div>
            <div  className="pt-1 pb-4">
                <div className="flex justify-between">
                    <div>Occupational taxes and fees</div>
                    <div>R20</div>  
                </div>
            </div>
             <div  className="py-2 border-t">
                <div className="flex justify-between">
                    <div>Total</div>
                    <div>R{(place.price * numberOfNights) + 120 }</div>  
                </div>
            </div>
            </div>
            <div className="flex gap-2 justify-center pt-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                </svg>

                <div className="text-gray-500 underline">Report this listing</div>
            </div>
        </div>
    );
}
