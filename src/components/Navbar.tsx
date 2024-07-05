import { LuMenu } from "react-icons/lu"
import SliderTogglerBtn from "./SliderTogglerBtn"

export default function Navbar() {
    const paths = ["About", "Projects", "Achievements", "Experience", "Contact"]
    function scrollToSection(section: string) {
        const sectionElement = document.getElementById(section)
        sectionElement?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
    return (
        <>
            <button className=" w-fit md:hidden peer">
                <LuMenu className=" w-6 h-6" />
            </button>
            <nav className="nav-wrapper | fixed top-0 right-0 z-50  text-primary md:text-black translate-x-full md:translate-x-0 peer-focus:translate-x-0 transition-[transform] delay-150 duration-700 text-2xl md:text-base font-medium md:font-normal  w-full h-full bg-black md:bg-transparent md:h-fit md:w-fit md:static flex justify-evenly flex-col md:flex-row items-center">
                {paths.map((path, idx) => {
                    return (
                        <SliderTogglerBtn key={idx} route={"/" + path.toLowerCase()} className="nav-link | flex flex-col justify-center items-center w-fit group px-3 transition-[opacity] outline-none" >
                            <h1 className=" outline-none text-xl font-light">{path}</h1>
                            <div className=" h-0.5 flex w-full flex-grow bg-black scale-x-0 group-hover:scale-x-100 transition-[transform] origin-right"></div>
                        </SliderTogglerBtn>
                    )
                })}
            </nav>
        </>
    )
}
