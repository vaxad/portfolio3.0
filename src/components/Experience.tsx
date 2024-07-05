import { getExperiences } from "@/actions/actions"
import { Experience } from "@/lib/types"
import ExperienceDisplay from "./ExperienceDisplay"
import { BsArrowUpRight } from "react-icons/bs"
import SliderTogglerBtn from "./SliderTogglerBtn"
import ExperienceShowcase from "./ExperienceShowcase"

export default async function Experiences() {
    const resp: { experiences: Experience[] } | null = await getExperiences()
    const data: Experience[] | null = resp ? resp.experiences.sort((a, b) => (parseInt(b.order) - parseInt(a.order))) : null
    return data ? (
        <div id="Experience" className=" py-8 gap-4 flex flex-col w-full overflow-x-clip  ">
            <div className=" flex flex-col md:flex-row px-4 md:px-24 gap-4 w-full h-fit group" >
                <div className=" flex flex-col gap-4 w-full md:text-center items-center ">
                    <SliderTogglerBtn title="See More" className="outline-none flex justify-center items-center w-full slide-up-animation" route="/experience">
                        <div className=" flex flex-col gap-0.5 w-fit cursor-pointer ">
                            <div className=" flex gap-2 items-center">
                                <h1 className=" text-4xl font-medium ">
                                    Experience
                                </h1>
                                <BsArrowUpRight className=" w-6 h-6" />
                            </div>
                            <div className=" h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 transition-[transform] origin-left duration-500 delay-100"></div>
                        </div>
                    </SliderTogglerBtn>
                    <i className=" text-xl">
                        &quot;My journey through the tech cosmos&quot;
                    </i>
                </div>
            </div>
            {/* <ExperienceDisplay data={data} /> */}
            <ExperienceShowcase data={data} />
        </div>
    ) : (
        <></>
    )
}
