import { useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BookingPage() {
    const { id } = useParams();
    const [booking, setBooking] = useState(null)
    useEffect(() => {
        if (id) {
            axios.get(`/bookings`).then(responce => {
                const bookingDoc = responce.data.find(({ _id }) => _id === id)
                if (bookingDoc) {
                    setBooking(bookingDoc)
                }
            })
        }
    }, [id])
    if (!booking) {
        return ''
    }
    return (
        <div>
            <AccountNav/>
            <h1>One Booking Page : {id}</h1>
        </div>
    )
 }