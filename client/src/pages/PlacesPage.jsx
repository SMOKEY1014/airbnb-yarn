import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios"
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import PlacesFormPage from "./PlacesForm";
import AccountNav from "../AccountNav";
import PlaceImg from "../PlaceImg";

export default function PlacesPage() {

    const [places, setPlaces] = useState([])
    useEffect(() => {
        axios.get('/user-places').then(({ data }) => {
            setPlaces(data);
        })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Function to delete a place
    const deletePlace = (placeId) => {
    console.log(`Deleting place with ID: ${placeId}`);
    axios.delete(`/places/${placeId}`)
        .then(response => {
            console.log('Place deleted...')
            console.log(response.data);
            setPlaces(places.filter(place => place._id !== placeId));
        // Handle success (e.g., refresh the list of places)
        })
        .catch(error => {
        console.error('Error deleting place:', error);
        });
    };



    

    return (
        <div>
            <AccountNav/>
            <div className="text-center">
                
                <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
                    to={'/account/places/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add New Place
                </Link>
            </div>
            <div className="mt-8 gap-y-8">
                {places.length > 0 && places.map((place, index) => (
                    <div key={place._id}>
                        <div className="mb-2 p-4 border-t border-gray-300 h-60 flex gap-8 justify-between">
                            <div className="flex gap-8">
                                {place.photos?.[0] && (
                                    <img className="rounded-2xl object-cover h-full aspect-video" src={'https://airbnb-yarn.onrender.com/uploads/' + place.photos?.[0]} alt="" />
                                )}
                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col justify-between">
                                        <div className="block">
                                            <h2 className="text-gray-400">Entire Home in Durban</h2>
                                            <h3 className="text-3xl">{place.title}</h3>
                                        </div>
                                        <div className="">
                                            <div className="flex gap-2 text-gray-400">
                                                <li>4-6 Guests</li>
                                                <li>Entire Home</li>
                                                <li>5 Beds</li>
                                                <li>3 Baths</li>
                                            </div>
                                            <div className="flex gap-2 text-gray-400">
                                                <li>Wifi</li>
                                                <li>Kitchen</li>
                                                <li>Free Parking</li>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <span>5.0</span>
                                            <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                            </div>
                                            <div>(120 reviews)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                               
                                <div className="mt-1">
                                    <span className="font-bold">R{place.price}/</span> night
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center text-white">
                            <Link to={'/account/places/'+place._id} className="mx-2 flex justify-center items-center rounded-lg mb-4 p-2 bg-blue-600  w-96">Update</Link>
                            <button onClick={() => deletePlace(place._id)} className="mx-2 flex justify-center items-center rounded-lg mb-4 p-2 bg-primary w-96">Delete</button>                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}