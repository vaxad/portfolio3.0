import { landingText } from "@/lib/constants"

export default function Home() {
    const paths = ["Projects", "Achievements", "About", "Contact"]
    return (
        <div className=" flex flex-col h-full flex-grow">
            <div className=" flex flex-row justify-between items-center py-4 px-6">
                <h1 className=" text-cl font-extrabold">
                    vaxad
                </h1>
                <nav className="nav-wrapper | hidden md:flex flex-row items-center ">
                    {paths.map((path, idx) => {
                        return (
                            <div key={idx} className="nav-link | flex flex-col justify-center items-center w-fit group px-3 transition-[opacity]">
                                <button className=" text-xl font-light " >{path}</button>
                                <div className=" h-0.5 flex w-full flex-grow bg-black scale-x-0 group-hover:scale-x-100 transition-[transform] origin-right"></div>
                            </div>
                        )
                    })}
                </nav>
            </div>
            <div className=" flex flex-col px-4 md:px-24 py-4 md:py-20 h-full flex-grow justify-center items-center">
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
