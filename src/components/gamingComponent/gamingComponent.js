import React, { useEffect, useState } from "react"
import { All_Cards } from "./constant"
const Index = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        setCards(All_Cards)
    }, [])
    const gameHandler = (index, game) => {
        if (game?.active === 1) {
            let duplicate = [...cards]
            duplicate[index].active = 0;
            setCards(duplicate)
        }
        else {
            let duplicate = [...cards]
            duplicate[index].active = 1;
            setCards(duplicate)
        }
    }
    return (
        <div>
            {/* container_div */}
            {/* background_color_div */}
            <div className="bg-black ">
                <div className="min-h-screen flex items-center">
                    <div className=" container mx-auto  flex flex-col items-center justify-center  ">
                        {/* All_content_div */}
                        <div className="w-full lg:w-3/5">
                            {/* heading_div */}
                            <div className="text-white text-center lg:text-left ">
                                <h1 className="text-3xl lg:text-5xl font-normal">You made it Welcome to Oneupgaming</h1>
                                <h2 className="text-yellow-400 text-3xl lg:text-5xl font-normal py-4">Name!</h2>
                            </div>
                            {/* sub-heading_2_div */}
                            <div className="text-white py-8 text-center">
                                <p className="text-xl lg:text-2xl font-normal">Select some Game you like</p>
                            </div>
                            {/* images_div */}
                            <div className=" flex justify-center">
                                <div className="flex justify-center flex-wrap w-10/12">
                                    {cards?.map((game, index) => (
                                        <div key={index} className={`mx-6 my-5 h-fit ${game?.active === 1 ? "active_box" : "inActive_box"}`}>
                                            <div className="h-fit cursor-pointer " onClick={() => gameHandler(index, game)}>
                                                <img src={game?.img} alt="" className={` ${game?.class}`} />
                                            </div>
                                        </div >
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index;