import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FooterIndex } from "../FooterIndex"
import { IndexMid } from "../IndexMid"
import { IndexTop } from "../IndexTop"
import { Header2 } from "../Header2"
import { Header } from "../Header"

export default function Home() {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        axios.get('/places').then(responce => {
            setPlaces([...responce.data, ...responce.data, ...responce.data]);
        })
    })

    return (
        <div className="flex flex-col items-center w-screen h-screen bg-black">
            <Header2 />
            <div className="flex flex-col gap-4 justify-center bg-cover bg-center bg-[url('https://images.axios.com/ccRxjRxOJoCPxNgH4r49V1vCiHs=/1366x768/smart/2024/01/06/1704508875670.webp?w=1366')] w-4/5 rounded-2xl h-4/5 mx-16 mt-8 mb-16 items-center">
                <div className="text-6xl pb-8 text-white">Not sure where to go? Perfect.</div>
                <button className="py-8 px-8 rounded-full bg-white -mb-32">I'm flexible</button>
            </div>
        </div>
    )
}