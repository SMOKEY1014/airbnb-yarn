import { useState } from "react";

export default function PlaceGallery({ place }) {
    const [showAllPhotos, setShowAllPhotos] = useState(false);

    if (showAllPhotos) {
        return (
            <div className="absolute inset-0 bg-black text-white min-h-screen">
                <div className="p-8 grid gap-4 bg-black">
                    <div>
                        <h1 className="text-3xl mr-48">{place.title}</h1>
                        <button onClick={() => setShowAllPhotos(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                            </svg>
                            Close
                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo => (
                        <div key={photo}>
                            <img src={'https://airbnb-yarn.onrender.com/uploads/' + photo} alt={place.title} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative  p-16 -mt-8 -mb-24 pb-8 aspect-video">
            <div className="grid h-3/4 gap-2 grid-cols-1 md:grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
                <div className="md:col-span-1">
                    {place.photos?.[0] && (
                        <div>
                            <img
                                onClick={() => { setShowAllPhotos(true); }}
                                className="cursor-pointer object-cover w-full h-full rounded-tl-2xl rounded-bl-2xl"
                                src={'https://airbnb-yarn.onrender.com/uploads/' + place.photos[0]}
                                alt={place.title}
                            />
                        </div>
                    )}
                </div>
                <div className="grid h-4/5 grid-cols-1 md:grid-cols-2 gap-2">
                    {place.photos?.[1] && (
                        <img
                            onClick={() => { setShowAllPhotos(true); }}
                            className="cursor-pointer object-cover w-full h-full"
                            src={'https://airbnb-yarn.onrender.com/uploads/' + place.photos[1]}
                            alt={place.title}
                        />
                    )}
                    {place.photos?.[2] && (
                        <img
                            onClick={() => { setShowAllPhotos(true); }}
                            className="cursor-pointer object-cover w-full h-full"
                            src={'https://airbnb-yarn.onrender.com/uploads/' + place.photos[2]}
                            alt={place.title}
                        />
                    )}
                    {place.photos?.[3] && (
                        <img
                            onClick={() => { setShowAllPhotos(true); }}
                            className="cursor-pointer object-cover w-full h-full"
                            src={'https://airbnb-yarn.onrender.com/uploads/' + place.photos[3]}
                            alt={place.title}
                        />
                    )}
                    {place.photos?.[4] && (
                        <div className="relative">
                            <img
                                onClick={() => { setShowAllPhotos(true); }}
                                className="cursor-pointer object-cover w-full h-full"
                                src={'https://airbnb-yarn.onrender.com/uploads/' + place.photos[4]}
                                alt={place.title}
                            />
                           <button onClick={() => setShowAllPhotos(true)} className=" flex gap-1 absolute bottom-9 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                    </svg>
                    Show More Photos
                </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
