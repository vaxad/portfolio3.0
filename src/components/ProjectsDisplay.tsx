"use client"

import { ProjectData } from "@/lib/types"
import { useState } from "react"
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs"
import SliderTogglerBtn from "./SliderTogglerBtn"

export default function ProjectsDisplay({ data }: { data: ProjectData }) {
    const [hoveredProj, setHoveredProj] = useState<number | null>(null)
    type dataType = "web" | "server" | "app"
    const [type, setType] = useState<dataType>("web")

    return (
        <>
            <div className=" flex flex-col md:flex-row gap-4 w-full h-fit">
                <div className=" flex flex-col gap-4 w-full group">
                    <SliderTogglerBtn title="See More" route="/projects" className="slide-up-animation">
                        <div className=" flex flex-col gap-0.5 w-fit cursor-pointer ">
                            <div className=" flex gap-2 items-center">
                                <h1 className=" text-4xl font-medium ">
                                    Projects
                                </h1>
                                <BsArrowUpRight className=" w-6 h-6" />
                            </div>
                            <div className=" h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 transition-[transform] origin-left duration-500 delay-100"></div>
                        </div>
                    </SliderTogglerBtn>
                    <i className=" text-xl">
                        &quot;Check out my tech wizardry in action&quot;
                    </i>
                </div>
                <div className=" flex flex-row flex-grow w-full justify-center md:justify-end items-start">
                    {Object.keys(data).map((key, idx) => {
                        return (
                            <button key={`type-${idx}`} onClick={() => setType(key as dataType)} className={` py-2 px-4 border border-black text-xl font-medium ${type === key ? "bg-black text-primary" : ""}`}>
                                {key[0].toUpperCase() + key.slice(1)}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className=" flex flex-col-reverse md:flex-row ">
                <div className=" w-full md:w-1/2 flex flex-col justify-center items-center">
                    <div className=" w-full h-full relative flex flex-col justify-center items-center px-6">
                        <div className={`${hoveredProj ? " opacity-0" : " opacity-100"} duration-700 flex flex-row gap-2 py-24 justify-center items-center absolute mx-auto my-auto `}>
                            <h1 className={` text-2xl font-medium hidden md:block`}>Hover over there</h1>
                            <h1 className={` text-2xl font-medium md:hidden block`}>Click over there</h1>
                            <BsArrowRight className={` -rotate-90 md:rotate-0 w-6 h-6 animate-pulse`} />
                        </div>
                        <>
                            <div className=" flex absolute top-0 right-0 flex-grow w-full overflow-clip h-full blur-sm">
                                {data[type].slice(0, 4).map((item, idx) => {
                                    return (
                                        <img key={`bg-image-${idx}`} className={` ${(hoveredProj && idx === hoveredProj - 1) ? "opacity-100" : "opacity-0"} bnw bg-black transition-all duration-1000 object-cover absolute top-0 right-0 h-full w-full`} src={type === "server" ? idx % 2 === 0 ? "/images/server1.png" : "/images/server2.png" : (item.img[0] as string)} alt={item.title} />
                                    )
                                })}
                            </div>
                            <div className={` ${hoveredProj ? "" : ""} delay-300 p-4 z-10 transition-all  relative overflow-clip  ${type === "app" ? "aspect-[9/16] h-full min-h-[30vh]" : " aspect-video  w-full"}`} >
                                {data[type].slice(0, 4).map((item, idx) => {
                                    return (
                                        <img key={`image-${idx}`} className={` ${(hoveredProj && idx === hoveredProj - 1) ? "c2 scale-100" : "c1 scale-125"} border bg-black border-white  origin-left transition-all duration-1000 absolute top-0 right-0 w-full h-full`} src={type === "server" ? idx % 2 === 1 ? "/images/server1.png" : "/images/server2.png" : (item.img[0] as string)} alt={item.title} />
                                    )
                                })}

                            </div>
                        </>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col nav-wrapper " onMouseLeave={() => setHoveredProj(null)}>
                    {data[type].slice(0, 3).map((item, idx) => {
                        const delay = idx * 0.1
                        return (
                            <div key={`project-${item.title}`} onMouseEnter={() => setHoveredProj(idx + 1)} style={{ animationDelay: `${delay}s` }} className="project-btn nav-link | w-full group border-b flex border-black py-12 px-4 font-light hover:font-medium hover:bg-black hover:text-primary hover:px-8 transition-all flex-row  justify-between items-center">
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
