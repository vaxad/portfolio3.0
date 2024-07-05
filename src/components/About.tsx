import { aboutText } from "@/lib/constants";
import SliderTogglerBtn from "./SliderTogglerBtn";
import { BsArrowUpRight } from "react-icons/bs";

export default function About() {
    return (
        <div id="About" className=" px-4 md:px-24 py-8 gap-4 flex flex-col justify-start items-start">
            <SliderTogglerBtn title="See More" route="/about">
                <div className=" flex flex-col gap-0.5 w-fit cursor-pointer group slide-up-animation">
                    <div className=" flex gap-2 items-center">
                        <h1 className=" text-4xl font-medium ">
                            About
                        </h1>
                        <BsArrowUpRight className=" w-6 h-6" />
                    </div>
                    <div className=" h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 transition-[transform] origin-left duration-500 delay-100"></div>
                </div>
            </SliderTogglerBtn>
            <p className=" text-2xl fade-animation " style={{ animationDelay: "2400ms" }}>
                {aboutText}
            </p>
        </div>
    )
}
