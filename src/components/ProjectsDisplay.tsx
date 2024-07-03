"use client"

import { ProjectData } from "@/lib/types"
import { useState } from "react"
import { LuArrowUpRight, LuArrowRight } from "react-icons/lu"

export default function ProjectsDisplay({ data }: { data: ProjectData }) {
    const [hoveredProj, setHoveredProj] = useState<number | null>(null)
    type dataType = "web" | "server" | "app"
    const [type, setType] = useState<dataType>("web")
    return (
        <>
            <div className=" flex flex-col md:flex-row gap-4 w-full h-fit">
                <div className=" flex flex-col gap-4 w-full">
                    <h1 className="slide-up-animation text-4xl font-medium w-full">
                        Projects
                    </h1>
                    <p className=" text-xl">
                        Here are some of the projects I have worked on over the years.
                    </p>
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
                        {/* {hoveredProj && data.web[hoveredProj - 1].img[0] ? */}
                        <div className={`${hoveredProj ? " opacity-0" : " opacity-100"} duration-700 flex flex-row gap-2 py-24 justify-center items-center absolute mx-auto my-auto `}>
                            <h1 className={` text-2xl font-medium hidden md:block`}>Hover over there</h1>
                            <h1 className={` text-2xl font-medium md:hidden block`}>Click over there</h1>
                            <LuArrowRight className={` -rotate-90 md:rotate-0 w-6 h-6 animate-pulse`} />
                        </div>
                        <>
                            <div className=" flex absolute top-0 right-0 flex-grow w-full overflow-clip h-full">

                                {data[type].slice(0, 4).map((item, idx) => {
                                    return (
                                        <img key={`bg-image-${idx}`} className={` ${(hoveredProj && idx === hoveredProj - 1) ? "opacity-100" : "opacity-0"} bg-black transition-all duration-1000 object-cover blur-sm absolute top-0 right-0 h-full w-full`} src={type === "server" ? idx % 2 === 0 ? "/images/server1.png" : "/images/server2.png" : (item.img[0] as string)} />
                                    )
                                })}
                            </div>
                            {/* <img className={` object-fill blur-sm absolute top-0 right-0  h-full`} src={data.web[hoveredProj - 1].img[0] as string} /> */}
                            <div className={` ${hoveredProj ? "" : ""} delay-300 p-4 z-10 transition-all  relative overflow-clip  ${type === "app" ? "aspect-[9/16] h-full min-h-[30vh]" : " aspect-video  w-full"}`} >
                                {data[type].slice(0, 4).map((item, idx) => {
                                    return (
                                        <img key={`image-${idx}`} className={` ${(hoveredProj && idx === hoveredProj - 1) ? "c2 scale-100" : "c1 scale-125"} border bg-black border-white  origin-left transition-all duration-1000 absolute top-0 right-0 w-full h-full`} src={type === "server" ? idx % 2 === 1 ? "/images/server1.png" : "/images/server2.png" : (item.img[0] as string)} />
                                    )
                                })}

                            </div>
                        </>
                        {/* : <></>} */}
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
                                    <LuArrowUpRight className=" cursor-pointer  w-10 h-10 group-hover:scale-110 delay-300 duration-500 transition-[transform]" />
                                </a>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}
