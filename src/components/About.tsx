import { aboutText } from "@/lib/constants";

export default function About() {
    return (
        <div id="About" className=" px-4 md:px-24 py-8 gap-4 flex flex-col justify-center items-center">
            <h1 className="slide-up-animation text-4xl font-medium w-full">
                About
            </h1>
            <p className=" text-2xl fade-animation " style={{ animationDelay: "2400ms" }}>
                {aboutText}
            </p>
        </div>
    )
}
