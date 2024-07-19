import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FooterIndex } from "../FooterIndex"
import { IndexMid } from "../IndexMid"
import { IndexTop } from "../IndexTop"
import { Header2 } from "../Header2"
import Home from "./Home"

export default function Index() {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        axios.get('/places').then(responce => {
            setPlaces([...responce.data, ...responce.data, ...responce.data]);
        })
    })

    return (
        <div className="flex flex-col items-center">

            <Home />

            {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-3 ld:grid-cols-4 gap-x-6 gap-y-8">
                {places.length > 0 && places.map(place => (
                    <Link to={'/place/' + place._id}>
                        <div className="bg-gray-500 mb-2 rounded-2xl flex">
                            {place.photos?.[0] && (
                                <img className="rounded-2xl object-cover aspect-square" src={'http://localhost:4000/uploads/' + place.photos?.[0]} alt="" />
                            )}
                        </div>
                        <h2 className="font-bold ">{place.address}</h2>
                        <h3 className="text-sm  text-gray-500">{place.title}</h3>
                        <div className="mt-1">
                            <span className="font-bold">R{place.price}</span> per night
                        </div>
                </Link>
                ))}
            </div> */}
            <IndexTop/>
            <IndexMid/>
            <FooterIndex/>
           </div>
    )
}