import { useEffect, useState } from "react"
import Perks from "../Perks";
import { Link, Navigate, useParams } from "react-router-dom";
import PhotosUploader from "../PhotosUploader";
import axios from "axios"
import AccountNav from "../AccountNav";

export default function PlacesFormPage() {
    const { id } = useParams();
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [addedPhotos, setAddedPhotos] = useState([])
    const [photoLink, setPhotoLink] = useState('')
    const [description, setDescription] = useState('')
    const [perks, setPerks] = useState([])
    const [extraInfo, setExtraInfo] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [maxGuests, setMaxGuests] = useState(1)
    const [price, setPrice] = useState(100)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        if (!id) { 
            return
        }
        console.log(id)
        axios.get('/places/' + id).then(responce => {
            const { data } = responce;
            setTitle(data.title);
            setAddress(data.address)
            setAddedPhotos(data.photos)
            setDescription(data.description)
            setPerks(data.perks)
            setExtraInfo(data.extraInfo)
            setMaxGuests(data.maxGuests)
            setCheckIn(data.checkIn)
            setCheckOut(data.checkOut)
            setPrice(data.price)
        })
    },[id])

    function inputHeader(text) {
        return (
            <h2 className="text-2xl text-blue-500 mt-4">{text}</h2>
        )
    }

    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        )
    }

    
    function preInput(header, description) {
        return (

            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        )
        
    }

    async function savePlace(ev) {
        ev.preventDefault();
        const placeData = {
            title, address, addedPhotos,
            description, perks, extraInfo,
            checkIn, checkOut, maxGuests, price
        }

        if (id) {
            try {
                await axios.put('/places', { id, ...placeData });
                setRedirect(true);
            } catch (error) {
                console.error('Error creating place:', error);
            }
        
        } else {
            
            try {
                await axios.post('/places', placeData );
                setRedirect(true);
            } catch (error) {
                console.error('Error creating place:', error);
            }
        }
    }
    if (redirect) {
        return <Navigate to={'/account/places'} />
    }


    return (
        <div>
            <AccountNav/>
                    <form onSubmit={savePlace}>
                        {preInput('Listing Name', 'Title for your place. Should be short and catchy as in advertisement.')}
                        <input
                            value={title}
                            onChange={ev => setTitle(ev.target.value)}
                            type="text"
                            placeholder="Title, e.g My Home"
                        />
                        {preInput('Location', 'Address to this place.')}
                        <input
                            value={address}
                            onChange={ev => setAddress(ev.target.value)}
                            type="text"
                            placeholder="Address"
                        />
                        {preInput('Photos', 'The more the better.')}
                        <PhotosUploader
                            addedPhotos={addedPhotos}
                            setAddedPhotos={setAddedPhotos}
                            photoLink={photoLink}
                            setPhotoLink={setPhotoLink}
                            onChange={setAddedPhotos}
                        />
                        {preInput('Description', 'Description of the place')}
                        <textarea
                            value={description}
                            onChange={ev => setDescription(ev.target.value)}
                        />
                        {preInput('Perks', 'Select all the perks of your place.')}
                        <Perks selected={perks} onChange={setPerks} />
                        {preInput('Extra info', 'House rules, etc.')}
                        <textarea
                            value={extraInfo}
                            onChange={ev => setExtraInfo(ev.target.value)}
                        />
                        {preInput('Check-in and Check-out times, Number of guests', 'Add check in and out times, remember to have some time window for cleaning room between the guests')}
                        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
                            <div className="mt-2 -mb-1">
                                <h3>Check In time</h3>
                                <input
                                    value={checkIn}
                                    onChange={ev => setCheckIn(ev.target.value)}
                                    type="text"
                                    placeholder="14"
                                />
                            </div>
                            <div className="mt-2 -mb-1">
                                <h3>Check Out time</h3>
                                <input
                                    value={checkOut}
                                    onChange={ev => setCheckOut(ev.target.value)}
                                    type="text"
                                    placeholder="10"
                                />
                            </div>
                            <div className="mt-2 -mb-1">
                                <h3>Max Number of Guests</h3>
                                <input
                                    value={maxGuests}
                                    onChange={ev => setMaxGuests(ev.target.value)}
                                    type="number"
                                    placeholder="1"
                                />
                    </div>
                    
                    <div className="mt-2 -mb-1">
                                <h3>Price per night</h3>
                                <input
                                    value={price}
                                    onChange={ev => setPrice(ev.target.value)}
                                    type="number"
                                    placeholder="100"
                                />
                            </div>
                        </div>
                        <button className="bg-blue-500 rounded-lg py-4 w-full my-4">Save</button>
                    </form>
                </div>
    )
}