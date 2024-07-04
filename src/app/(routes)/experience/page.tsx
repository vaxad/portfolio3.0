import { Experience, ProjectData } from "@/lib/types"
import ExperienceDisplay from "./(components)/ExperienceDisplay"
import { getExperiences, getProjects } from "@/actions/actions"
export default async function Page() {
    const resp: { experiences: Experience[] } | null = await getExperiences()
    const data: Experience[] | null = resp ? resp.experiences.sort((a, b) => (parseInt(b.order) - parseInt(a.order))) : null
    return (
        <div className=" flex flex-col flex-grow overflow-hidden ">

            <div className="flex flex-col min-h-[80vh] ">
                <div className="flex -mb-4 ">
                    <div className="flex marquee-animation">
                        <div className="flex flex-row w-full justify-between ">
                            {"EXPERIENCEXPERIENC".split("").map((letter, idx) => {
                                return (
                                    <h1 key={`letter-${idx}`} className={`text-8xl md:text-9xl font-medium text-center`}>{letter}</h1>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex marquee-animation">
                        <div className="flex flex-row w-full justify-between ">
                            {"EXPERIENCEXPERIENC".split("").map((letter, idx) => {
                                return (
                                    <h1 key={`letter-${idx}`} className={`text-8xl md:text-9xl font-medium text-center`}>{letter}</h1>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex marquee-animation">
                        <div className="flex flex-row w-full justify-between ">
                            {"EXPERIENCEXPERIENC".split("").map((letter, idx) => {
                                return (
                                    <h1 key={`letter-${idx}`} className={`text-8xl md:text-9xl font-medium text-center`}>{letter}</h1>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col h-[90vh] md:h-[80vh] overflow-hidden">
                        <div className="flex flex-col-reverse h-fit reverse-vertical-marquee-animation">
                            {"XPERIENCEXPERIENCE".split("").map((letter, idx) => {
                                return (
                                    <h1 key={`letter-${idx}`} className={`text-8xl -rotate-90 md:text-9xl ${letter === "I" ? "-my-6 md:-my-10" : " -my-6 md:-my-8"} font-medium text-center`}>{letter}</h1>
                                )
                            })}
                        </div>
                        <div className="flex flex-col-reverse h-fit reverse-vertical-marquee-animation">
                            {"XPERIENCEXPERIENCE".split("").map((letter, idx) => {
                                return (
                                    <h1 key={`letter-${idx}`} className={`text-8xl -rotate-90 md:text-9xl ${letter === "I" ? "-my-6 md:-my-10" : " -my-6 md:-my-8"} font-medium text-center`}>{letter}</h1>
                                )
                            })}
                        </div>
                        <div className="flex flex-col-reverse h-fit reverse-vertical-marquee-animation">
                            {"XPERIENCEXPERIENCE".split("").map((letter, idx) => {
                                return (
                                    <h1 key={`letter-${idx}`} className={`text-8xl -rotate-90 md:text-9xl ${letter === "I" ? "-my-6 md:-my-10" : " -my-6 md:-my-8"} font-medium text-center`}>{letter}</h1>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-4 ml-[4px] bg-secondary flex-grow flex"></div>
                    <div className=" w-full flex-grow flex flex-col">
                        <div className="max-h-4 h-4 w-full bg-secondary  flex"></div>
                        <div className=" flex flex-grow justify-center items-center px-6 md:px-16 lg:p-24">
                            <i className=" text-2xl w-full text-center  fade-animation up-animation " style={{ animationDelay: "2s" }}>
                                &quot;Take a look at my professional adventures! Here&apos;s where I&apos;ve been, the code I&apos;ve written, and the teams I&apos;ve collaborated with.&quot;
                            </i>
                        </div>
                    </div>
                    <div className="w-4 mr-[4px] bg-secondary flex-grow flex"></div>
                    <div className="flex flex-col h-[90vh] md:h-[80vh] overflow-hidden">

                        <div className="flex flex-col vertical-marquee-animation ">
                            {"NCEXPERIENCEXPERIE".split("").map((letter, idx) => {
                                return (
                                    <h1 key={`letter-${idx}`} className={`text-8xl rotate-90 md:text-9xl ${letter === "I" ? "-my-6 md:-my-10" : " -my-6 md:-my-8"} font-medium text-center`}>{letter}</h1>
                                )
                            })}
                        </div>
                        <div className="flex flex-col vertical-marquee-animation ">
                            {"NCEXPERIENCEXPERIE".split("").map((letter, idx) => {
                                return (
                                    <h1 key={`letter-${idx}`} className={`text-8xl rotate-90 md:text-9xl ${letter === "I" ? "-my-6 md:-my-10" : " -my-6 md:-my-8"} font-medium text-center`}>{letter}</h1>
                                )
                            })}
                        </div>
                        <div className="flex flex-col vertical-marquee-animation ">
                            {"NCEXPERIENCEXPERIE".split("").map((letter, idx) => {
                                return (
                                    <h1 key={`letter-${idx}`} className={`text-8xl rotate-90 md:text-9xl ${letter === "I" ? "-my-6 md:-my-10" : " -my-6 md:-my-8"} font-medium text-center`}>{letter}</h1>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-0.5 bg-tertiary rounded-full flex w-full"></div>
            {data ?
                <ExperienceDisplay data={data} />
                :
                <></>
            }
        </div>
    )
}
