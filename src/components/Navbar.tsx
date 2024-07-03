import SliderTogglerBtn from "./SliderTogglerBtn"

export default function Navbar() {
    const paths = ["About", "Projects", "Achievements", "Experience", "Contact"]
    function scrollToSection(section: string) {
        const sectionElement = document.getElementById(section)
        sectionElement?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
    return (
        <nav className="nav-wrapper | hidden md:flex flex-row items-center">
            {paths.map((path, idx) => {
                return (
                    <SliderTogglerBtn key={idx} route={"/" + path.toLowerCase()} className="nav-link | flex flex-col justify-center items-center w-fit group px-3 transition-[opacity]" >
                        <h1 className=" outline-none text-xl font-light">{path}</h1>
                        <div className=" h-0.5 flex w-full flex-grow bg-black scale-x-0 group-hover:scale-x-100 transition-[transform] origin-right"></div>
                    </SliderTogglerBtn>
                )
            })}
        </nav>
    )
}
