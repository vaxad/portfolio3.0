import { resumeLink } from "@/lib/constants"
import Gallery from "./(components)/Gallery"
import FamGallery from "./(components)/FamGallery"
import AboutSection from "./(components)/AboutSection"

export default function Page() {
    return (
        <div className="flex flex-col">
            <div className=" flex flex-col flex-grow pb-24 pt-6 md:px-16 px-0 lg:px-24">
                <div className=" w-full flex justify-end  text-right text-6xl font-semibold px-6 md:px-0">
                    <h1 className="w-fit fade-animation up-animation" style={{ animationDelay: "2s", animationDuration: "0.3s" }}>About <i title="Get Resume" className="text-secondary">
                        <a target="_blank" href={resumeLink}>Me</a></i></h1>
                </div>
                <div className=" flex flex-col-reverse lg:grid lg:grid-cols-[1fr_2fr] gap-6 w-full">
                    <Gallery />
                    <AboutSection />
                </div>
            </div>
            <div className=" py-24 flex flex-col px-0 md:px-16 lg:px-24">
                <div className=" w-full flex text-6xl font-semibold px-6 md:px-0">
                    <h1 className="bg-secondary w-fit  fade-animation up-animation" style={{ animationDelay: "2.5s" }}> <i> Gallery</i></h1>
                </div>

                <div className=" flex flex-col w-full py-6 border-t border-tertiary overflow-x-hidden ">
                    <FamGallery />
                </div>
            </div>
        </div>
    )
}
