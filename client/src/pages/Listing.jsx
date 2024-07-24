import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SunIcon from "../assets/heart";
import MoonIcon from "../assets/nonheart";

export default function Listing() {
    const [places, setPlaces] = useState([]);
    const [iconStates, setIconStates] = useState([]); // Manage icon states for each item

    // Fetch places and initialize iconStates
    useEffect(() => {
        axios.get('/places').then(response => {
            const fetchedPlaces = response.data;
            setPlaces([...fetchedPlaces, ...fetchedPlaces, ...fetchedPlaces]);

            // Initialize icon states for each place
            setIconStates(new Array(fetchedPlaces.length * 3).fill(true));
        });
    }, []);

    // Toggle function for a specific index
    const toggleIcon = (index) => {
        setIconStates(prevStates => 
            prevStates.map((state, i) => i === index ? !state : state)
        );
    };

    return (
        <div className="">
            <div className="gap-4 flex justify-evenly mt-8">
                <span className="border border-gray-400 p-1 px-4 rounded-2xl">Price</span>
                <span className="border border-gray-400 p-1 px-4 rounded-2xl">Type of place</span>
                <span className="border border-gray-400 p-1 px-4 rounded-2xl">Wifi</span>
                <span className="border border-gray-400 p-1 px-4 rounded-2xl">Kitchen</span>
                <span className="border border-gray-400 p-1 px-4 rounded-2xl">Iron</span>
                <span className="border border-gray-400 p-1 px-4 rounded-2xl">Parking</span>
                <span className="border border-gray-400 p-1 px-4 rounded-2xl">Dryer</span>
                <span className="border border-gray-400 p-1 px-4 rounded-2xl">Air-conditioning</span>
                <span className="border border-gray-400 p-1 px-4 rounded-2xl">Free cancellation</span>
                <span className="border border-gray-400 p-1 px-4 rounded-2xl">Dedicated workspace</span>
            </div>
            <div className="my-8 pt-16 border-t text-gray-500">+20 Stays in Durban</div>
            <div className="mt-8 gap-y-8">
                {places.length > 0 && places.map((place, index) => (
                    <div key={place._id}>
                        <div className="mb-2 border-t border-gray-300 h-60 flex gap-8 p-4 justify-between">
                            <Link to={'/place/' + place._id} className="flex gap-8">
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
                            </Link>
                            <div className="flex flex-col items-end justify-between">
                                <div onClick={() => toggleIcon(index)}>
                                    {iconStates[index] ? <SunIcon /> : <MoonIcon />}
                                </div>
                                <div className="mt-1">
                                    <span className="font-bold">R{place.price}/</span> night
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
