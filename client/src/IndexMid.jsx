
export const IndexMid = () => {


    return (
        <div className="mb-32 mt-8">
            <h1 className="text-4xl pt-16">Discover Airbnb Experiences</h1>
            <div className="flex gap-8 my-8">
                <div className="pl-24 pt-24 size-6/12 min-h-fit pb-80 rounded-3xl bg-cover bg-center bg-[url('https://wallpaper.forfun.com/fetch/6e/6e34b892967909db447eed2974378a9e.jpeg')]">
                    <div className="text-white text-5xl max-w-80 leading-relaxed">
                    Things to do on your trip
                    </div>
                    <button className="mt-16 px-8 rounded-lg h-16 bg-white">Experiences</button>
                
                </div>
                <div className="pl-24 pt-24 size-6/12 min-h-fit pb-80 rounded-3xl bg-cover bg-center bg-[url('https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg?cs=srgb&dl=pexels-olly-3769999.jpg&fm=jpg')]">
                    <div className="text-white text-5xl max-w-80 leading-relaxed">
                        Things to do from home
                    </div>
                    <button className="mt-16 px-8 rounded-lg h-16 bg-white">Online Experiences</button>
                
                </div>
            </div>
            <div className="flex mb-8 flex justify-center items-center">
                <div className="max-w-80">
                    <div className="text-black text-6xl my-8 ">
                        Shop Airbnb gift cards
                    </div>
                    <button className="px-8 text-white rounded-lg h-16 bg-black">Learn more</button>

                </div>
                <div className="overflow-hidden max-w-fit">
                    <img className="object-cover w-full h-full transform -translate-x-16" src="https://ml5u6r2vr7de.i.optimole.com/cb:aeZg.3180f/w:1600/h:1025/q:mauto/f:avif/https://fantasticostudio.co/wp-content/uploads/2022/09/airbnb_laura_niubo_giftcards.png" alt="" />
                </div>
            </div>
            <div className="pt-24 px-8 items-start justify-center h-screen rounded-3xl bg-cover bg-center bg-[url('https://c0.wallpaperflare.com/path/406/597/301/blackboard-business-woman-professional-suit-89cf7856e4cca7a9dc6c7c5c927af717.jpg')]">
                <div className="flex flex-wrap w-8 mx-16">
                    <div>
                        <h1 className="text-white text-9xl">Questions about hosting ?</h1>
                        <button className="mt-16 px-8 rounded-lg h-16 bg-white">Ask a Superhost</button>
                    </div>
                </div>
            </div>
        </div>
    )
}