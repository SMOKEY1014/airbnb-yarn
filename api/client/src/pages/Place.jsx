import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { differenceInCalendarDays } from "date-fns";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import LinkAddress from "../AddressLink";
// import { DateRangePicker } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function PlacePage() {
    const [place, setPlace] = useState(null);
    const [numOfNights, setNumOfNights] = useState(1)
    const { id } = useParams();
    const [date, setDate] = useState([
        {
            startDate: new Date(), // Initial values, can be changed
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    // console.log(date[0].startDate)
    function formatDateToCustomFormat(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
    }
    
    const stringCheckIn = formatDateToCustomFormat(date[0].startDate)
    const stringCheckOut = formatDateToCustomFormat(date[0].endDate)

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 2).padStart(2, '0'); // Months start at 0!
    const dd = String(today.getDate()).padStart(2, '0');
    const canDate = `${yyyy}-${mm}-${dd}`;
    useEffect(() => {
        if (!id) {
            return
        }
        
        
        axios.get(`/places/${id}`).then(responce => {
            setPlace(responce.data)
        })

        
    }, [id])
    console.log('from place.jsx ', date[0].startDate)

    
    if (!place)
        return

    return (
        <div className="mt-8 -mx-8 px-8 pt-8">
            <h1 className="text-3xl mb-3">{place.title}</h1>
            <LinkAddress>{place.address}</LinkAddress>
            <PlaceGallery place={place} />
           
            <div className="grid mb-8 grid-cols-1 md:grid-cols-[2fr_1fr] mt-8  gap-8">
                
                <div>
                     <div className="my-4">
                        <h2 className="font-semibold text-2xl">Entire rental unit hosted by John</h2>
                        {/* {place.description} */}
                        <div className="flex border-b pt-4 pb-8 gap-4">
                            6 Guests
                            <li>4 Bedrooms</li>
                            <li>4 Beds</li>
                            <li>3 Baths</li>
                        </div>
                    </div>
                    <div className="gap-4">
                        <div className="flex gap-6 py-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                                </svg>


                            </div>
                            <div className="">
                                <div>Entire Home</div>
                                <div className="text-gray-500">decription</div>
                            </div>
                        </div>
                        <div className="flex gap-6 py-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                </svg>


                            </div>
                            <div className="">
                                <div>Enhanced Clean</div>
                                <div className="text-gray-500">This host is commited to Airbnb's 5-step enhanced cleaning process.<b className="text-black"> Show more</b> </div>
                            </div>
                        </div>
                        <div className="flex gap-6 py-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </div>
                            <div className="">
                                <div>Self Check-in</div>
                                <div className="text-gray-500">Check yourself with the keypad.</div>
                            </div>
                        </div>
                        <div className="flex gap-6 py-2 items-center border-b pb-8">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>


                            </div>
                            <div className="">
                                <div>Free cancellation before {canDate}</div>
                                <div className="text-gray-500"></div>
                            </div>
                        </div>
                        <div className="h-32 overflow-y-scroll flex flex-wrap w-full">
                            {place.description}<br/> ...
                        </div>
                        <div className="flex border-b pb-8 gap-2 p-1 items-center font-bold">
                            <div className="-mt-1 underline">Show more</div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div>
                    <BookingWidget place={place} setDate={setDate} setNumOfNights={setNumOfNights} />
                </div>
            </div>
            <div className="-mx-8 px-8 py-8 border-y">
                <div>
                    <h2 className=" text-3xl py-8">Where you'll sleep</h2>
                </div>
                {/* <div className="text-sm text-gray-700 leading-5 mb-4 mt-2">{place.extraInfo}</div> */}
                <div className="bg-gray-500 w-96 h-60 rounded-2xl">
                    <img
                                className="cursor-pointer object-cover w-full h-full  rounded-2xl"
                                src='https://a0.muscache.com/im/pictures/bf97a223-ed5f-4df5-8872-fb8ed6c508d2.jpg?im_w=1200'
                                alt={place.title}
                            />
                </div>
                <div className="text-lg pt-4">Bedroom</div>
                <div className="text-base pb-8">1 queen bed</div>
            </div>
            <div className="-mx-8 px-8 py-8 border-b">
                <div>
                    <h2 className=" text-3xl py-8">What this place offers</h2>
                </div>
                <div className="w-3/6 grid grid-cols-1 md:grid-cols-2  gap-x-3 gap-y-4">
                    
                    <div className="flex gap-4">
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                        </svg>
                        </div>
                        <div className="">Wifi</div>
                    </div>
                    <div className="flex gap-4">
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                        </div>
                        <div className="">Free washer - in building</div>
                    </div>
                    <div className="flex gap-4">
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                        </div>
                        <div className="">Central air conditioning</div>
                    </div>
                    <div className="flex gap-4">
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M9.674 2.075a.75.75 0 0 1 .652 0l7.25 3.5A.75.75 0 0 1 17 6.957V16.5h.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H3V6.957a.75.75 0 0 1-.576-1.382l7.25-3.5ZM11 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.5 9.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5Zm3.25 0a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5Zm3.25 0a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5Z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="">Refrigerator</div>
                    </div>
                    <div className="flex gap-4">
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                        </svg>
                        </div>
                        <div className="">Kitchen</div>
                    </div>
                    <div className="flex gap-4">
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        </div>
                        <div className="">Pets Allowed</div>
                    </div>
                    <div className="flex gap-4">
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>
                        </div>
                        <div className="">Dryer</div>
                    </div>
                    <div className="flex gap-4">
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        </div>
                        <div className="">Security Cameras on</div>
                    </div>
                    <button className="p-2 w-fit rounded-xl bg-white border border-black ">Show all 37 amenities</button>
                   
                </div>
                <div className="">
                   <div>
                        <h2 className=" text-3xl pt-8 border-t mt-8">{numOfNights} Nights in {place.title}</h2>
                        <h3 className="pb-4">{stringCheckIn} - {stringCheckOut}</h3>
                </div>
                    <DateRangePicker 
                        className="pb-8 border-b"
                        onChange={item => setDate([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={date}
                        direction="horizontal"
                        />
                </div>
                
            </div>

    </div>
    )
}