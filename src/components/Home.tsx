import { landingText } from "@/lib/constants"
import { LuGithub, LuLinkedin, LuTwitter, LuNewspaper } from "react-icons/lu"
import { resumeLink } from "@/lib/constants"
// import Navbar from "./Navbar"

export default function Home() {
    return (
        <div className=" flex flex-col h-full flex-grow">
            <div className=" flex flex-col px-4 md:px-24 pt-12 pb-4 md:pt-20 md:pb-20 h-full flex-grow justify-center items-center">
                <div className="flex flex-row gap-4 w-full justify-start items-center ">
                    <a href="https://x.com/vaxaddev" target="_blank" className=" fade-animation" style={{ animationDelay: "2100ms" }}>
                        <LuTwitter className="w-10 h-10" />
                    </a>
                    <a href="https://github.com/vaxad" target="_blank" className=" fade-animation" style={{ animationDelay: "2200ms" }}>
                        <LuGithub className="w-10 h-10" />
                    </a>
                    <a href="https://www.linkedin.com/in/varadprabhu" target="_blank" className=" fade-animation" style={{ animationDelay: "2300ms" }}>
                        <LuLinkedin className="w-10 h-10" />
                    </a>
                    <a href={resumeLink} target="_blank" className=" fade-animation" style={{ animationDelay: "2400ms" }}>
                        <LuNewspaper className="w-10 h-10" />
                    </a>
                </div>
                <h1 className="clampLargeText font-semibold ">
                    {landingText.split(" ").map((char, idx) => {
                        const delay = 2 + (idx * 0.02)
                        return (
                            <span className="up-animation inline-block" style={{ animationDelay: `${delay}s` }} key={`letter-${idx}`}>{char}<>&nbsp;</></span>)
                    })}
                </h1>

            </div>
        </div>
    )
}
