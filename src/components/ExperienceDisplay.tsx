"use client"

import { Experience } from "@/lib/types"
import { Dispatch, SetStateAction, useState } from "react"
import { LuArrowUp, LuTriangle } from "react-icons/lu"

function ExpCard({ item, idx, hovered, setHovered }: {
    item: Experience, idx: number, hovered: number | null, setHovered: Dispatch<SetStateAction<number | null>>
}) {
    const isHovered = hovered && hovered === idx
    return (
        <div className=" py-4 flex flex-col relative" onMouseOver={() => setHovered(idx)}>
            <div className=" flex w-full">
                <h1 className=" text-4xl font-semibold">{item.company.split("·")[0].trim()}</h1>
                <h1 className=" text-4xl font-semibold px-6">{"·"}</h1>
            </div>
            <div className=" flex w-full relative">
                <div className={` absolute -top-0 right-1/3 md:right-1/2 mx-auto flex flex-col w-full md:w-[200%]  transition-[transform] origin-top ${isHovered ? " scale-y-100" : "scale-y-0"}`}>
                    <div className=" w-full flex justify-end">
                        <LuTriangle size={20} className=" fill-primary aspect-square -my-2" />
                    </div>
                    <div className="p-4 border border-black bg-primary flex flex-col md:flex-row w-full">
                        <img src={item.img} alt={item.company} className=" w-full md:w-1/2 h-fit  aspect-square border border-black flex-wrap text-wrap" />
                        <div className=" flex flex-col gap-2 w-full p-4 flex-wrap text-wrap">
                            <h1 className=" text-2xl font-medium">{item.role}</h1>
                            <h1 className=" text-sm font-light">{item.location}</h1>
                            <p className=" text-sm font-light">{item.skills.slice(0, 3).join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function ExperienceDisplay({ data }: { data: Experience[] }) {
    const [hoveredExperience, setHoveredExperience] = useState<number | null>(null)
    return (
        <>
            <div className=" flex flex-col md:flex-row md:px-24 gap-4 w-full h-fit" >
                <div className=" flex flex-col gap-4 w-full md:text-center">
                    <h1 className="slide-up-animation text-4xl font-medium w-full">
                        Experiences
                    </h1>
                    <p className=" text-xl">
                        Here are some of the experiences I have gained on over the years.
                    </p>
                </div>
            </div>
            <div className="flex marquee-animation-parent z-20">
                <div onMouseLeave={() => setHoveredExperience(0)} className="marquee-animation  flex flex-row flex-nowrap text-nowrap">
                    {[...data].map((item, idx) => {
                        return (
                            <ExpCard idx={idx + 1} item={item} key={`exp-${idx}`} setHovered={setHoveredExperience} hovered={hoveredExperience} />
                        )
                    })}
                </div>
                <div onMouseLeave={() => setHoveredExperience(0)} className="marquee-animation flex flex-row flex-nowrap text-nowrap">
                    {[...data].map((item, idx) => {
                        return (
                            <ExpCard idx={idx + data.length + 1} item={item} key={`exp-${idx}`} setHovered={setHoveredExperience} hovered={hoveredExperience} />
                        )
                    })}
                </div>
                <div onMouseLeave={() => setHoveredExperience(0)} className="marquee-animation flex flex-row flex-nowrap text-nowrap">
                    {[...data].map((item, idx) => {
                        return (
                            <ExpCard idx={idx + data.length * 2 + 1} item={item} key={`exp-${idx}`} setHovered={setHoveredExperience} hovered={hoveredExperience} />
                        )
                    })}
                </div>
            </div>
            <div className={`${hoveredExperience ? " opacity-0" : " opacity-100"} duration-700 py-12 flex w-full justify-center items-center `}>
                <h1 className={` text-2xl font-medium hidden md:block`}>Hover over there</h1>
                <h1 className={` text-2xl font-medium md:hidden block`}>Click over there</h1>
                <LuArrowUp className={` w-6 h-6 animate-pulse`} />
            </div>
        </>
    )
}
