import { Achievement } from "@/lib/types";
import { BsArrowUpRight } from "react-icons/bs";

function GalleryCard({ item, i }: { item: Achievement, i: number }) {
    return (
        <div className=" w-[400px] group  transition-[filter] aspect-video relative rounded-lg overflow-clip mx-4 ">
            <div className="flex w-full z-20 flex-col p-4 absolute top-0 bottom-0 my-auto mx-auto bg-[rgba(0,0,0,0.5)] text-primary opacity-0 group-hover:opacity-100 transition-[opacity]  ">
                <h1 className=" text-2xl font-medium text-wrap">
                    {item.title}
                </h1>
                <p className="text-sm text-wrap">
                    {item.desc}
                </p>
                <div className=" flex flex-grow justify-end items-end">
                    <a href={item.url} target="_blank">
                        <BsArrowUpRight className="w-6 h-6" />
                    </a>
                </div>
            </div>
            <img className={`bnw group-hover:blur-[2px] transition-[filter] delay-0 duration-500 absolute top-0 bottom-0 my-auto mx-auto`} src={item.img} alt={item.title} />
        </div>
    )
}

export default function FamGallery({ data }: { data: Achievement[] }) {
    return (

        <div className=" flex flex-grow pt-24 flex-col gap-6 overflow-x-hidden">
            <div className="flex flex-nowrap marquee-animation-parent">
                <div style={{ animationDuration: "20s" }} className="marquee-animation flex flex-row flex-nowrap text-nowrap">
                    {[...data].map((item, i) => (
                        <GalleryCard item={item} i={i} key={`card-${i}`} />
                    ))}
                </div>
                <div style={{ animationDuration: "20s" }} className="marquee-animation flex flex-row flex-nowrap text-nowrap">
                    {[...data].map((item, i) => (
                        <GalleryCard item={item} i={i} key={`card-${i}`} />
                    ))}
                </div>
            </div>

        </div>
    )
}
