"use client"

import { Achievement } from "@/lib/types"
import { useState } from "react"
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs"
import SliderTogglerBtn from "./SliderTogglerBtn"

export default function AchievementDisplay({ data }: { data: Achievement[] }) {
    const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null)
    return (
        <>
            <div className=" flex flex-col md:flex-row gap-4 w-full h-fit group">
                <div className=" flex flex-col gap-4 w-full md:text-right">
                    <SliderTogglerBtn title="See More" route="/achievements">
                        <div className=" flex flex-col gap-0.5 w-fit cursor-pointer ">
                            <div className=" flex gap-2 items-center">
                                <h1 className="slide-up-animation text-4xl font-medium ">
                                    Achievements
                                </h1>
                                <BsArrowUpRight className=" w-6 h-6" />
                            </div>
                            <div className=" h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 transition-[transform] origin-left duration-500 delay-100"></div>
                        </div>
                    </SliderTogglerBtn>
                    <i className=" text-xl">
                        &quot;Where my hard work paid off big time&quot;
                    </i>
                </div>
            </div>
            <div className=" flex flex-col-reverse md:flex-row-reverse ">
                <div className=" w-full md:w-1/2 flex flex-col justify-center items-center">
                    <div className=" w-full h-full relative flex flex-col justify-center items-center px-6">
                        {/* {hoveredAchievement && data.web[hoveredAchievement - 1].img[0] ? */}
                        <div className={`${hoveredAchievement ? " opacity-0" : " opacity-100"} duration-700 flex flex-row-reverse gap-2 py-24 justify-center items-center absolute mx-auto my-auto `}>
                            <h1 className={` text-2xl font-medium hidden md:block`}>Hover over there</h1>
                            <h1 className={` text-2xl font-medium md:hidden block`}>Click over there</h1>
                            <BsArrowRight className={` -rotate-90 md:rotate-180 w-6 h-6 animate-pulse`} />
                        </div>
                        <>
                            <div className=" flex absolute top-0 right-0 flex-grow w-full overflow-clip h-full blur-sm">

                                {data.slice(0, 4).map((item, idx) => {
                                    return (
                                        <img key={`bg-image-${idx}`} className={` ${(hoveredAchievement && idx === hoveredAchievement - 1) ? "opacity-100" : "opacity-0"} bnw bg-black transition-all duration-1000 object-cover absolute top-0 right-0 h-full w-full`} src={item.img} alt={item.title} />
                                    )
                                })}
                            </div>
                            {/* <img className={` object-fill blur-sm absolute top-0 right-0  h-full`} src={data.web[hoveredAchievement - 1].img[0] as string} /> */}
                            <div className={`delay-300 p-4 z-10 transition-all relative overflow-clip aspect-video w-full`} >
                                {data.slice(0, 4).map((item, idx) => {
                                    return (
                                        <img key={`image-${idx}`} className={` ${(hoveredAchievement && idx === hoveredAchievement - 1) ? "c2 scale-100" : "c1 scale-125"} border bnw bg-black border-white  origin-left transition-all duration-1000 absolute top-0 right-0 w-full h-full`} src={item.img} alt={item.title} />
                                    )
                                })}

                            </div>
                        </>
                        {/* : <></>} */}
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col nav-wrapper " onMouseLeave={() => setHoveredAchievement(null)}>
                    {data.slice(0, 3).map((item, idx) => {
                        const delay = idx * 0.1
                        return (
                            <div key={`achievement-${item.title}`} onMouseEnter={() => setHoveredAchievement(idx + 1)} style={{ animationDelay: `${delay}s` }} className="project-btn nav-link | w-full group border-b flex border-black py-12 px-4 font-light hover:font-medium hover:bg-black hover:text-primary hover:px-8 transition-all flex-row  justify-between items-center">
                                <div className=" flex flex-col justify-center items-center w-fit">
                                    <h1 className=" text-2xl ">{item.title}</h1>
                                    <div className=" h-0.5 w-full bg-primary group-hover:scale-x-100 scale-x-0 origin-left transition-[transform] delay-100 duration-500 "></div>
                                </div>
                                <a href={item.url} target="_blank">
                                    <BsArrowUpRight className=" cursor-pointer  w-10 h-10 group-hover:scale-110 delay-300 duration-500 transition-[transform]" />
                                </a>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}
